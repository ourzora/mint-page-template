import request from 'graphql-request'
import Head from 'next/head'
import { useMemo } from 'react'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import DropMetadataContractProvider, {
  useDropMetadataContract,
} from 'providers/DropMetadataProvider'
import { Stack, Paragraph } from '@zoralabs/zord'
import { GetServerSideProps, NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import { GET_COLLECTIONS_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { ipfsImage, shortenAddress } from '@lib/helpers'
import { collectionAddresses } from '@lib/constants'
import { useAccount, useEnsName } from 'wagmi'
import { Collection } from '@components/Collection'

interface HomePageProps {
  collections: SubgraphERC721Drop[]
}

const HomePage: NextPage<HomePageProps> = ({ collections }) => {
  const { metadata } = useDropMetadataContract()
  const ogImage = ipfsImage(metadata?.image || collections[0]?.editionMetadata?.imageURI)
  const { address } = useAccount()
  const { data: ensName } = useEnsName({
    address: address,
  })
  const username = useMemo(() => ensName || shortenAddress(address), [address, ensName])

  if (!collections.length) {
    return (
      <Paragraph py="x5" align="center">
        404, contract not found.
      </Paragraph>
    )
  }

  return (
    <>
      <Head>
        <title>{collections[0].name}</title>
        <meta name="title" content={`${collections[0].name}`} />
        <meta
          name="description"
          content={
            collections[0].editionMetadata?.description ||
            "ZORA's creator toolkit makes it easy to create an NFT collection, with tooling that scales with your creative ambitions"
          }
        />
        <meta name="og:title" content={`${collections[0].name}`} />
        <meta
          name="og:url"
          content={`https://create.zora.co/editions/${collections[0].address}`}
        />
        <meta
          name="og:description"
          content={
            collections[0].editionMetadata?.description ||
            "ZORA's creator toolkit makes it easy to create an NFT collection, with tooling that scales with your creative ambitions"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${collections[0].name}`} />
        <meta
          name="twitter:url"
          content={`https://create.zora.co/editions/${collections[0].address}`}
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      {/*<Flex justify="flex-end" p="x4" className={header}>
        <ConnectWallet />
      </Flex>*/}
      <Stack align="center" minH="100vh">
        {collections.map((collection) => (
          <ERC721DropContractProvider
            key={collection.address + '_' + username}
            erc721DropAddress={collection.address}
          >
            <DropMetadataContractProvider
              metadataRendererAddress={collection.contractConfig?.metadataRenderer}
              address={collection.address}
            >
              <Collection username={username} collection={collection} />
            </DropMetadataContractProvider>
          </ERC721DropContractProvider>
        ))}
      </Stack>
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { erc721Drops } = await request(SUBGRAPH_URL, GET_COLLECTIONS_QUERY, {
    collectionAddresses: collectionAddresses,
  })

  if (!erc721Drops.length) {
    res.statusCode = 404
  }

  return {
    props: {
      collections: erc721Drops,
    },
  }
}
