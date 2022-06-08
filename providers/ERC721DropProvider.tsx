import { useSigner } from 'wagmi'
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ERC721Drop__factory } from '../constants/typechain'
import { EditionSaleDetails, EditionSalesConfig } from '../models/edition'
import { BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import type { ContractTransaction } from 'ethers'

export interface ERC721DropProviderState {
  purchase: (quantity: number) => Promise<ContractTransaction | undefined>
  updateSalesConfig: (salesConfig: EditionSalesConfig) => Promise<void>
  startPublicSale: () => Promise<void>
  userCanMint: () => Promise<boolean>
  withdraw: () => Promise<void>
}

export const ERC721DropContext = React.createContext<ERC721DropProviderState>(
  {} as ERC721DropProviderState
)

const ERC721DropContractProvider: React.FC<{
  erc721DropAddress: string
  children: ReactNode
}> = ({ children, erc721DropAddress }) => {
  const { data: signer } = useSigner()
  const [saleDetails, setSaleDetails] = useState<EditionSaleDetails>()
  const drop = useMemo(
    () => (signer ? new ERC721Drop__factory(signer).attach(erc721DropAddress) : null),
    [signer, erc721DropAddress]
  )

  useEffect(() => {
    ;(async () => {
      if (saleDetails || !drop || !signer) {
        return
      }
      const config = (await drop.saleDetails()) as unknown

      setSaleDetails(config as EditionSaleDetails)
    })()
  }, [drop, saleDetails, signer])

  const purchase = useCallback(
    async (quantity: number) => {
      if (!drop || !saleDetails) return
      const tx = await drop.purchase(quantity, { value: saleDetails.publicSalePrice })
      return tx
    },
    [drop, saleDetails]
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

      await tx.wait()

      const updatedConfig = (await drop.saleDetails()) as unknown

      setSaleDetails(updatedConfig as EditionSaleDetails)
    },
    [drop]
  )

  const startPublicSale = useCallback(async () => {
    if (!saleDetails) {
      return
    }

    await updateSalesConfig({
      ...(saleDetails as EditionSaleDetails),
      publicSaleStart: BigNumber.from(Math.round(Date.now() / 1000).toString()),
      // MAX UINT64
      publicSaleEnd: BigNumber.from('18446744073709551615'),
      maxSalePurchasePerAddress: BigNumber.from(3),
      // For example, 0.01 eth price
      publicSalePrice: parseEther('0.01'),
    })
  }, [saleDetails, updateSalesConfig])

  const userCanMint = useCallback(async () => {
    if (!signer || !drop || !saleDetails) {
      return false
    }
    const address = await signer?.getAddress()
    return (
      (await drop.mintedPerAddress(address)).totalMints.lt(
        saleDetails.maxSalePurchasePerAddress
      ) && saleDetails.totalMinted.lt(saleDetails.maxSupply)
    )
  }, [signer, drop, saleDetails])

  const withdraw = useCallback(async () => {
    if (!signer || !drop) {
      console.error('missing signer or drop instance', signer, drop)
      return
    }
    await drop.withdraw()
  }, [signer, drop])

  return (
    <ERC721DropContext.Provider
      value={{ purchase, updateSalesConfig, startPublicSale, userCanMint, withdraw }}
    >
      {children}
    </ERC721DropContext.Provider>
  )
}

export default ERC721DropContractProvider

export const useERC721DropContract = () => useContext(ERC721DropContext)
