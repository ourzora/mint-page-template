// import {DropMetadataRenderer__factory} from '@zoralabs/nft-drop-contracts/dist/typechain/DropMetadataRenderer'
import { DropMetadataRenderer__factory } from '../constants/typechain'
import type { ContractTransaction } from 'ethers'
import { SubgraphERC721Drop } from 'models/subgraph'
import { transformIPFSURL } from 'providers/IPFSProvider'
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useSWR from 'swr'
import { cleanDescription } from 'utils/edition'
import { useProvider, useSigner } from 'wagmi'

export interface MetadataDetails {
  name?: string
  description?: string
  imageURI?: string
  animationURI?: string
  metadataURIBase?: string
  contractURI?: string
  loading?: boolean
}

export interface DropMetadataProviderState {
  metadataDetails: MetadataDetails
  updateMetadataBase: (
    baseUri: string,
    newContractUri: string
  ) => Promise<ContractTransaction | undefined>
}

export const DropMetadataContext = React.createContext<DropMetadataProviderState>(
  {} as DropMetadataProviderState
)

function DropMetadataContractProvider({
  collection,
  metadataRendererAddress,
  children,
}: {
  collection: SubgraphERC721Drop
  metadataRendererAddress: string
  children?: ReactNode
}) {
  const { data: signer } = useSigner()
  const provider = useProvider()
  const [metadata, setMetadata] = useState<MetadataDetails | undefined>()
  const metadataRenderer = useMemo(
    () =>
      provider && metadataRendererAddress
        ? signer
          ? new DropMetadataRenderer__factory(signer).attach(metadataRendererAddress)
          : DropMetadataRenderer__factory.connect(metadataRendererAddress, provider)
        : null,
    [provider, signer, metadataRendererAddress]
  )
  const { data: extraMetadata } = useSWR(
    metadata?.contractURI ? transformIPFSURL(metadata.contractURI) : undefined,
    (url) =>
      fetch(url)
        .then((r) => r.text())
        .then((t) => {
          try {
            return JSON.parse(t.replace(/\\n/g, ' '))
          } catch (e) {
            return undefined
          }
        })
  )

  useEffect(() => {
    ;(async () => {
      try {
        if (!collection.address || !metadataRenderer) {
          throw 'No collection or metadataRenderer'
        }
        const { base, contractURI } = await metadataRenderer.metadataBaseByContract(
          collection.address
        )
        setMetadata((prevState) => ({
          ...prevState,
          metadataURIBase: base,
          contractURI: contractURI,
        }))
      } catch (e) {
        console.log({ e })
        setMetadata(undefined)
      }
    })()
  }, [signer, collection.address, metadataRenderer])

  const updateMetadataBase = useCallback(
    async (baseUri: string, newContractUri: string) => {
      if (!metadataRenderer || !signer) return

      setMetadata((prevState) => ({
        ...prevState,
      }))

      const tx = await metadataRenderer.updateMetadataBase(
        collection.address,
        baseUri,
        newContractUri
      )
      await tx.wait(2)

      setMetadata((prevState) => ({
        ...prevState,
        metadataURIBase: baseUri,
        contractURI: newContractUri,
      }))

      return tx
    },
    [signer, metadataRenderer, collection.address]
  )

  return (
    <DropMetadataContext.Provider
      value={{
        updateMetadataBase,
        metadataDetails:
          {
            loading: !extraMetadata,
            ...metadata,
            ...extraMetadata,
            imageURI: extraMetadata?.image || extraMetadata?.imageURI,
            description: extraMetadata?.description
              ? cleanDescription(extraMetadata.description)
              : undefined,
          } || {},
      }}
    >
      {children}
    </DropMetadataContext.Provider>
  )
}

export default DropMetadataContractProvider

export const useDropMetadataContract = () => useContext(DropMetadataContext)
