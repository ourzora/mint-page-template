import { ERC721Drop__factory } from '../constants/typechain'
import { EditionSalesConfig } from '../models/edition'
import { MAX_UINT64 } from 'constants/numbers'
import { BigNumber, errors, logger } from 'ethers'
import type { ContractTransaction } from 'ethers'
import { SubgraphERC721Drop } from 'models/subgraph'
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { AllowListEntry } from 'utils/merkle-proof'
import { useSigner } from 'wagmi'

export interface ERC721DropProviderState
  extends Omit<
    SubgraphERC721Drop,
    'salesConfig' | 'totalMinted' | 'maxSupply' | 'owner' | 'fundsRecipient'
  > {
  loading: boolean
  purchase: (quantity: number) => Promise<ContractTransaction | undefined>
  purchasePresale: (
    quantity: number,
    allowlistEntry?: AllowListEntry
  ) => Promise<ContractTransaction | undefined>
  salesConfig: EditionSalesConfig
  updateSalesConfig: (salesConfig: EditionSalesConfig) => Promise<void>
  startPublicSale: () => Promise<void>
  endPublicSale: () => Promise<void>
  startPresale: () => Promise<void>
  endPresale: () => Promise<void>
  userCanMint: () => Promise<boolean | undefined>
  updateMintCounters: () => void
  totalMinted: number
  maxSupply: number
  userMintedCount?: number
  fetchTotalMinted: () => Promise<number | undefined>
  fetchUserMintedCount: () => Promise<number | undefined>
  fundsRecipient?: string
  setFundsRecipient: (address: string | undefined) => Promise<boolean>
  owner?: string
  setOwner: (address: string | undefined) => Promise<boolean>
  grantAdmin: (address: string | undefined) => Promise<boolean>
  adminMintAirdrop: (addresses: string[]) => Promise<boolean>
  revokeAdmin: (address: string | undefined) => Promise<boolean>
  isAdmin: (address: string | undefined) => Promise<boolean | undefined>
  withdraw: () => Promise<ContractTransaction | undefined>
}

interface ERC721DropProviderStateState {
  loading: boolean
  userMintedCount?: number
  totalMinted: number
  owner?: string
  fundsRecipient?: string
  salesConfig: ERC721DropProviderState['salesConfig']
}

export const ERC721DropContext = React.createContext<ERC721DropProviderState>(
  {} as ERC721DropProviderState
)

function ERC721DropContractProvider({
  children,
  collection,
}: {
  children?: ReactNode
  collection: SubgraphERC721Drop
}) {
  const defaultEditionSalesDetails = {
    publicSalePrice: BigNumber.from(collection.salesConfig.publicSalePrice),
    maxSalePurchasePerAddress: BigNumber.from(
      collection.salesConfig.maxSalePurchasePerAddress
    ),
    publicSaleStart: BigNumber.from(collection.salesConfig.publicSaleStart),
    publicSaleEnd: BigNumber.from(collection.salesConfig.publicSaleEnd),
    presaleStart: BigNumber.from(collection.salesConfig.presaleStart),
    presaleEnd: BigNumber.from(collection.salesConfig.presaleEnd),
    presaleMerkleRoot: collection.salesConfig.presaleMerkleRoot,
  }

  const { data: signer } = useSigner()
  const [state, setState] = useState<ERC721DropProviderStateState>({
    loading: true,
    userMintedCount: undefined,
    totalMinted: Number(collection.totalMinted),
    salesConfig: defaultEditionSalesDetails,
    owner: collection.owner,
    fundsRecipient: collection.contractConfig.fundsRecipient,
  })

  const drop = useMemo(
    () => (signer ? new ERC721Drop__factory(signer).attach(collection.address) : null),
    [signer, collection.address]
  )

  const checkHasContract = useCallback(
    async (address: string) => {
      const code = await signer?.provider?.getCode(address)
      if ((code?.length || 0) <= 2) {
        logger.throwError('Request is on the wrong network', errors.NETWORK_ERROR)
      }
    },
    [signer]
  )

  const purchase = useCallback(
    async (quantity: number) => {
      if (!drop || !state.salesConfig) return
      await checkHasContract(drop.address)
      const tx = await drop.purchase(quantity, {
        value: (state.salesConfig.publicSalePrice as BigNumber).mul(
          BigNumber.from(quantity)
        ),
      })
      return tx
    },
    [drop, state.salesConfig]
  )

  const purchasePresale = useCallback(
    async (quantity: number, allowlistEntry?: AllowListEntry) => {
      if (!drop || !allowlistEntry) return
      await checkHasContract(drop.address)
      const tx = await drop.purchasePresale(
        quantity,
        allowlistEntry.maxCanMint,
        BigNumber.from(allowlistEntry.price),
        allowlistEntry.proof.map((e) => `0x${e}`),
        {
          value: BigNumber.from(allowlistEntry.price).mul(BigNumber.from(quantity)),
        }
      )
      return tx
    },
    [drop]
  )

  const updateSalesConfig = useCallback(
    async (config: EditionSalesConfig) => {
      if (!drop) return

      const tx = await drop.setSaleConfiguration(
        config.publicSalePrice,
        config.maxSalePurchasePerAddress,
        config.publicSaleStart,
        config.publicSaleEnd,
        config.presaleStart,
        config.presaleEnd,
        config.presaleMerkleRoot
      )

      await tx.wait(2)

      const updatedConfig = (await drop.saleDetails()) as unknown
      setState((prevState) => ({
        ...prevState,
        salesConfig: updatedConfig as EditionSalesConfig,
      }))
    },
    [drop]
  )

  const startPublicSale = useCallback(async () => {
    if (!drop || !state.salesConfig) return

    const tx = await drop.setSaleConfiguration(
      state.salesConfig.publicSalePrice,
      state.salesConfig.maxSalePurchasePerAddress,
      BigNumber.from(Math.round(Date.now() / 1000).toString()),
      MAX_UINT64,
      state.salesConfig.presaleStart,
      state.salesConfig.presaleEnd,
      state.salesConfig.presaleMerkleRoot
    )

    await tx.wait(2)

    const updatedConfig = (await drop.saleDetails()) as EditionSalesConfig
    setState((prevState) => ({
      ...prevState,
      salesConfig: updatedConfig,
    }))
  }, [drop, state.salesConfig])

  const endPublicSale = useCallback(async () => {
    if (!drop || !state.salesConfig) return

    const tx = await drop.setSaleConfiguration(
      state.salesConfig.publicSalePrice,
      state.salesConfig.maxSalePurchasePerAddress,
      0,
      0,
      state.salesConfig.presaleStart,
      state.salesConfig.presaleEnd,
      state.salesConfig.presaleMerkleRoot
    )

    await tx.wait(2)

    const updatedConfig = (await drop.saleDetails()) as EditionSalesConfig
    setState((prevState) => ({
      ...prevState,
      salesConfig: updatedConfig,
    }))
  }, [drop, state.salesConfig])

  const startPresale = useCallback(async () => {
    if (!drop || !state.salesConfig) return

    const tx = await drop.setSaleConfiguration(
      state.salesConfig.publicSalePrice,
      state.salesConfig.maxSalePurchasePerAddress,
      state.salesConfig.publicSaleStart,
      state.salesConfig.publicSaleEnd,
      BigNumber.from(Math.round(Date.now() / 1000).toString()),
      MAX_UINT64,
      state.salesConfig.presaleMerkleRoot
    )

    await tx.wait(2)

    const updatedConfig = (await drop.saleDetails()) as EditionSalesConfig
    setState((prevState) => ({
      ...prevState,
      salesConfig: updatedConfig,
    }))
  }, [drop, state.salesConfig])

  const endPresale = useCallback(async () => {
    if (!drop || !state.salesConfig) return

    const tx = await drop.setSaleConfiguration(
      state.salesConfig.publicSalePrice,
      state.salesConfig.maxSalePurchasePerAddress,
      state.salesConfig.publicSaleStart,
      state.salesConfig.publicSaleEnd,
      0,
      0,
      state.salesConfig.presaleMerkleRoot
    )

    await tx.wait(2)

    const updatedConfig = (await drop.saleDetails()) as EditionSalesConfig
    setState((prevState) => ({
      ...prevState,
      salesConfig: updatedConfig,
    }))
  }, [drop, state.salesConfig])

  const userCanMint = async () => {
    if (!signer?.getAddress || !drop || !state.salesConfig) {
      return undefined
    }
    const address = await signer.getAddress()
    return (
      (await drop.mintedPerAddress(address)).totalMints.lt(
        state.salesConfig.maxSalePurchasePerAddress
      ) && BigNumber.from(state.totalMinted).lt(BigNumber.from(collection.maxSupply))
    )
  }

  const fetchUserMintedCount = useCallback(async () => {
    if (!signer?.getAddress || !drop) {
      return undefined
    }
    const address = await signer.getAddress()
    return (await drop.mintedPerAddress(address)).totalMints.toNumber()
  }, [drop, signer])

  const fetchTotalMinted = useCallback(async () => {
    if (!drop || !signer?.getAddress) {
      return undefined
    }
    return (await drop.totalSupply()).toNumber()
  }, [drop, signer])

  const updateMintCounters = useCallback(async () => {
    const userMintedCount = await fetchUserMintedCount()
    const totalMinted = await fetchTotalMinted()
    setState((prevState) => ({
      ...prevState,
      userMintedCount: userMintedCount || prevState.userMintedCount,
      totalMinted: totalMinted || prevState.totalMinted,
    }))
  }, [fetchTotalMinted, fetchUserMintedCount])

  const withdraw = useCallback(async () => {
    if (!signer || !drop) {
      console.error('missing signer or drop instance', signer, drop)
      return
    }
    const tx = await drop.withdraw()
    return tx
  }, [signer, drop])

  const isAdmin = useCallback(
    async (address: string | undefined) => {
      if (!drop || !address || !signer?.getAddress) return false
      return await drop.isAdmin(address)
    },
    [drop, signer]
  )

  const setFundsRecipient = useCallback(
    async (address: string | undefined) => {
      if (!drop || !address) return false
      const tx = await drop.setFundsRecipient(address)
      await tx.wait(2)
      const newConfig = await drop.config()
      setState((prevState) => ({
        ...prevState,
        fundsRecipient: newConfig.fundsRecipient,
      }))
      return true
    },
    [drop]
  )

  const setOwner = useCallback(
    async (address: string | undefined) => {
      if (!drop || !address) return false
      const tx = await drop.setOwner(address)
      await tx.wait(2)
      const newOwner = await drop.owner()
      setState((prevState) => ({
        ...prevState,
        owner: newOwner,
      }))
      return true
    },
    [drop]
  )

  const grantAdmin = useCallback(
    async (address: string | undefined) => {
      if (!drop || !address) return false
      const adminRole = await drop.DEFAULT_ADMIN_ROLE()
      const tx = await drop.grantRole(adminRole, address)
      await tx.wait(2)
      return true
    },
    [drop]
  )

  const revokeAdmin = useCallback(
    async (address: string | undefined) => {
      if (!drop || !address) return false
      const adminRole = await drop.DEFAULT_ADMIN_ROLE()
      const tx = await drop.revokeRole(adminRole, address)
      await tx.wait(2)
      return true
    },
    [drop]
  )

  const adminMintAirdrop = useCallback(
    async (addresses: string[]) => {
      if (!drop || !addresses) return false
      const tx = await drop.adminMintAirdrop(addresses)
      await tx.wait()
      updateMintCounters()
      return true
    },
    [drop, updateMintCounters]
  )

  useEffect(() => {
    ;(async () => {
      try {
        if (!drop || !signer?.getAddress) {
          throw 'No signer or drop'
        }
        const salesConfig = (await drop.saleDetails()) as EditionSalesConfig
        const newConfig = await drop.config()
        const newOwner = await drop.owner()
        const userMintedCount = await fetchUserMintedCount()
        setState((prevState) => ({
          ...prevState,
          loading: false,
          salesConfig,
          userMintedCount,
          fundsRecipient: newConfig.fundsRecipient,
          owner: newOwner,
        }))
      } catch (e: any) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }))
      }
    })()
  }, [drop, signer, fetchUserMintedCount])

  return (
    <ERC721DropContext.Provider
      value={{
        ...collection,
        ...state,
        purchase,
        purchasePresale,
        isAdmin,
        setFundsRecipient,
        setOwner,
        grantAdmin,
        revokeAdmin,
        adminMintAirdrop,
        updateSalesConfig,
        startPublicSale,
        endPublicSale,
        startPresale,
        endPresale,
        userCanMint,
        updateMintCounters,
        maxSupply: Number(collection.maxSupply),
        fetchTotalMinted,
        fetchUserMintedCount,
        withdraw,
      }}
    >
      {children}
    </ERC721DropContext.Provider>
  )
}

export default ERC721DropContractProvider

export const useERC721DropContract = () => useContext(ERC721DropContext)
