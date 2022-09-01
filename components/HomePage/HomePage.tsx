import Head from 'next/head'
import {
  Stack,
  Flex,
} from '@zoralabs/zord'
import { ConnectWallet } from '@components/ConnectWallet'
import { NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import DropSection from '@components/DropSection'
import { ipfsImage } from '@lib/helpers'
import { header } from 'styles/styles.css'
import { useEffect, useState } from 'react'

interface HomePageProps {
  collection: SubgraphERC721Drop;
  chainId?: number;
  collectionTwo: SubgraphERC721Drop;
}

const HomePage: NextPage<HomePageProps> = ({ collection, chainId, collectionTwo }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window?.innerWidth < 720)
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  },[])
  const ogImage = ipfsImage(collection.editionMetadata.imageURI)

  return (
    <>
      <Head>
        <title>{collection.name}</title>
        <meta name="title" content={`${collection.name}`} />
        <meta
          name="description"
          content={
            collection.editionMetadata?.description ||
            "WAYSPACE by Jackintheway"
          }
        />
        <meta name="og:title" content={`${collection.name}`} />
        <meta
          name="og:url"
          content="https://www.vol.fm/#/"
        />
        <meta
          name="og:description"
          content={
            collection.editionMetadata?.description ||
            "WAYSPACE by Jackintheway"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${collection.name}`} />
        <meta
          name="twitter:url"
          content="https://www.vol.fm/#/"
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <Flex justify="flex-end" p="x4" className={header}>
        <ConnectWallet />
      </Flex>
      <Stack direction={ isMobile ? "column" :"row"} mt="x3" gap="x3">
        <DropSection collection={collection} isSecond={false} />
        {collectionTwo && <DropSection collection={collectionTwo} isSecond />}
        
      </Stack>
    </>
  )
}

export default HomePage
