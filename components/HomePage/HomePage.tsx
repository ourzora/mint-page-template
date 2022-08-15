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
import { NextPage } from 'next'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import { SubgraphERC721Drop } from 'models/subgraph'
import { MintStatus } from '@components/MintStatus'
import { MintDetails } from '@components/MintDetails'
import { PresaleStatus } from '@components/PresaleStatus'
import { ipfsImage } from '@lib/helpers'
import { header, maxWidth, border, heroImage } from 'styles/styles.css'
import { useSaleStatus } from 'hooks/useSaleStatus'

interface HomePageProps {
  collection: SubgraphERC721Drop;
  chainId?: number;
}

const HomePage: NextPage<HomePageProps> = ({ collection, chainId }) => {
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
            "VolFM's creator toolkit makes it easy to create a music NFT collection, with tooling that scales with your creative ambitions"
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
            "VolFM's creator toolkit makes it easy to create a music NFT collection, with tooling that scales with your creative ambitions"
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
              <ERC721DropContractProvider
                erc721DropAddress={collection.address}
                chainId={chainId}
              >
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
      </Stack>
    </>
  )
}

export default HomePage
