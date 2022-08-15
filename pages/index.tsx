import request from 'graphql-request'
import Head from 'next/head'
import { Flex } from '@zoralabs/zord'
import { ConnectWallet } from '@components/ConnectWallet'
import { GetServerSideProps , NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import { GET_COLLECTIONS_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { ipfsImage } from '@lib/helpers'
import { collectionAddresses } from '@lib/constants'
import { header } from 'styles/styles.css'
import { Collection } from '@components/Collection'

interface HomePageProps {
  collections: SubgraphERC721Drop[]
}

const HomePage: NextPage<HomePageProps> = ({ collections }) => {
  const ogImage = ipfsImage(collections[0].editionMetadata.imageURI)

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

      <Flex justify="flex-end" p="x4" className={header}>
        <ConnectWallet />
      </Flex>
      {collections.map(collection => (
        collection?.address && (
          <ERC721DropContractProvider key={collection.address} erc721DropAddress={collection.address}>
            <Collection collection={collection} />
          </ERC721DropContractProvider>
        )))}
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
  const { erc721Drops } = (await request(SUBGRAPH_URL, GET_COLLECTIONS_QUERY, {
    collectionAddresses: collectionAddresses,
  }))

  return {
    props: {
      collections: erc721Drops,
    },
  }

}
