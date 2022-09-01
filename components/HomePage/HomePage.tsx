import {
  Stack,
  Flex,
} from '@zoralabs/zord'
import { ConnectWallet } from '@components/ConnectWallet'
import { NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import DropSection from '@components/DropSection'
import Head from '@components/Head'
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
      <Head ogImage={ogImage}/>
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
