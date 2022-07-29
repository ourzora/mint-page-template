import request from 'graphql-request'
import Head from 'next/head'
import { useState } from 'react'
import {
  Box,
  Stack,
  Flex,
  Well,
  Text,
  Button,
  Paragraph,
  SpinnerOG,
} from '@zoralabs/zord'
import { ConnectWallet } from '@components/ConnectWallet'
import { utils } from 'ethers'
import { GetStaticProps, NextPage } from 'next'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import { SubgraphERC721Drop } from 'models/subgraph'
import { MintStatus } from '@components/MintStatus'
import { MintDetails } from '@components/MintDetails'
import { PresaleStatus } from '@components/PresaleStatus'
import { GET_COLLECTION_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { ipfsImage } from '@lib/helpers'
import { contractAddress } from '@lib/constants'
import { header, maxWidth, border, heroImage } from 'styles/styles.css'
import { useSaleStatus } from 'hooks/useSaleStatus'

interface HomePageProps {
  collection: SubgraphERC721Drop
}

const HomePage: NextPage<HomePageProps> = ({ collection }) => {
  const ogImage = ipfsImage(collection.editionMetadata.imageURI)
  const { presaleExists, saleNotStarted, saleIsFinished } = useSaleStatus({ collection })
  const [showPresale, setShowPresale] = useState(saleNotStarted && !saleIsFinished)

  return (
    <>
      <Head>
        <title>{collection.name}</title>
        <meta name="title" content={`${collection.name}`} />
        <meta
          name="description"
          content={
            collection.editionMetadata?.description ||
            "ZORA's creator toolkit makes it easy to create an NFT collection, with tooling that scales with your creative ambitions"
          }
        />
        <meta name="og:title" content={`${collection.name}`} />
        <meta
          name="og:url"
          content={`https://create.zora.co/editions/${collection.address}`}
        />
        <meta
          name="og:description"
          content={
            collection.editionMetadata?.description ||
            "ZORA's creator toolkit makes it easy to create an NFT collection, with tooling that scales with your creative ambitions"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${collection.name}`} />
        <meta
          name="twitter:url"
          content={`https://create.zora.co/editions/${collection.address}`}
        />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <Flex justify="flex-end" p="x4" className={header}>
        <ConnectWallet />
      </Flex>
      <Stack mt="x3" gap="x3">
        <Box className={maxWidth} p="x4">
          <Text variant="display-md" mb="x8" align="center">
            {collection.name}
          </Text>
          <Text>{collection?.editionMetadata?.description}</Text>
          <Box mt="x8" mx="auto" style={{ maxWidth: 560 }}>
            <Well className={border} p="x6" style={{ borderBottom: 0 }}>
              <img
                className={heroImage}
                src={ipfsImage(collection.editionMetadata.imageURI)}
                alt={collection.name}
              />
            </Well>
            <Well className={border} p="x6">
              <ERC721DropContractProvider erc721DropAddress={collection.address}>
                <Box>
                  {collection != null ? (
                    <>
                      {presaleExists ? (
                        <>
                          <Flex flexChildren gap="x3" mb="x2">
                            <Button
                              pill
                              variant={showPresale ? 'primary' : 'ghost'}
                              color={showPresale ? 'primary' : 'tertiary'}
                              onClick={() => setShowPresale(true)}
                            >
                              Presale
                            </Button>
                            <Button
                              pill
                              variant={!showPresale ? 'primary' : 'ghost'}
                              color={!showPresale ? 'primary' : 'tertiary'}
                              onClick={() => setShowPresale(false)}
                            >
                              Public sale
                            </Button>
                          </Flex>
                          <Box style={{ display: showPresale ? 'block' : 'none' }}>
                            <PresaleStatus collection={collection} />
                          </Box>
                          <Box style={{ display: !showPresale ? 'block' : 'none' }}>
                            <MintStatus collection={collection} />
                          </Box>
                        </>
                      ) : (
                        <MintStatus collection={collection} />
                      )}
                      <MintDetails collection={collection} showPresale={false} />
                    </>
                  ) : (
                    <Paragraph align="center" mt="x8">
                      <SpinnerOG />
                    </Paragraph>
                  )}
                </Box>
              </ERC721DropContractProvider>
            </Well>
          </Box>
        </Box>
        <Box p="x4" className={maxWidth}>
          <Text as="h2" mt="x0" mb="x2" variant="heading-sm">
            About
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et gravida
            dolor, non finibus nibh. Nullam sollicitudin molestie sem vel fermentum.
            Suspendisse vitae tincidunt justo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus et gravida dolor, non finibus nibh. Nullam
            sollicitudin molestie sem vel fermentum. Suspendisse vitae tincidunt justo.
          </Text>

          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et gravida
            dolor, non finibus nibh. Nullam sollicitudin molestie sem vel fermentum.
            Suspendisse vitae tincidunt justo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus et gravida dolor, non finibus nibh. Nullam
            sollicitudin molestie sem vel fermentum. Suspendisse vitae tincidunt justo.
          </Text>
        </Box>
        <Box p="x4" className={maxWidth} style={{ maxWidth: 400 }}>
          <Flex gap="x3" as="p" align="center" justify="space-between">
            <a href="https://twitter.com/ourZORA">Twitter</a>
            <a href="https://discord.com/invite/Va58aMrcwk">Discord</a>
            <a href={`https://etherscan.io/address/${contractAddress}`}>Etherscan</a>
            <a href={`https://zora.co/collections/${contractAddress}`}>Zora</a>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  if (!utils.isAddress(contractAddress)) {
    return {
      notFound: true,
    }
  }

  type Response = {
    erc721Drop: SubgraphERC721Drop
  }

  const { erc721Drop } = (await request(SUBGRAPH_URL, GET_COLLECTION_QUERY, {
    collectionAddress: contractAddress,
  })) as Response

  return {
    props: { collection: erc721Drop },
    revalidate: 60, // every minute
  }
}
