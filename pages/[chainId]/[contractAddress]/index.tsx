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
import { ethers, utils } from 'ethers'
import { GetStaticProps, NextPage } from 'next'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import { SubgraphERC721Drop } from 'models/subgraph'
import { MintStatus } from '@components/MintStatus'
import { MintDetails } from '@components/MintDetails'
import { PresaleStatus } from '@components/PresaleStatus'
import { GET_COLLECTION_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { ipfsImage } from '@lib/helpers'
import abi from '@lib/ERC721Drop-abi.json'
import metadataRendererAbi from '@lib/MetadataRenderer-abi.json'
import { header, maxWidth, border, heroImage } from 'styles/styles.css'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { defaultChains } from 'wagmi'

interface HomePageProps {
  collection: SubgraphERC721Drop,
  chainId: number,
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
              <ERC721DropContractProvider erc721DropAddress={collection.address} chainId={chainId}>
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

export const getServerSideProps: GetStaticProps = async (context) => {
  const {chainId, contractAddress} = context.params;
  if (!utils.isAddress(contractAddress.toString())) {
    return {
      notFound: true,
    }
  }

  // Create Ethers Contract
  const chain = defaultChains.find(
    (chain) => chain.id.toString() === chainId
  )
  const provider = ethers.getDefaultProvider({chainId: parseInt(chainId.toString()), name: chain.network});
  const contract = new ethers.Contract(contractAddress.toString(), abi, provider);

  // Get metadata renderer
  const metadataRendererAddress = await contract.metadataRenderer();
  const metadataRendererContract = new ethers.Contract(metadataRendererAddress.toString(), metadataRendererAbi, provider);
  const metadataBase = await metadataRendererContract.metadataBaseByContract(contractAddress);
  const metadataURI = ipfsImage(metadataBase.base)
  const axios = require('axios').default;
  const {data: metadata} = await axios.get(metadataURI)

  // Get Sale Details
  const saleDetails = await contract.saleDetails();
console.log("SALE DETAILS", saleDetails)

  console.log("METADATA", metadata);
  const maxSalePurchasePerAddress = saleDetails.maxSalePurchasePerAddress.toString() === "0" ? 1000001 : saleDetails.maxSalePurchasePerAddress.toString()
  const erc721Drop = {
    id: "string",
    created: {
      id: "string",
      block: "string",
      timestamp: "string",
    },
    creator: "string",
    address: contractAddress,
    name: metadata.name,
    symbol: "string",
    contractConfig: {
      metadataRenderer: "string",
      editionSize: "string",
      royaltyBPS: "number",
      fundsRecipient: "string",
    },
    salesConfig: {
      publicSalePrice: saleDetails.publicSalePrice.toString(),
      maxSalePurchasePerAddress,
      publicSaleStart: saleDetails.publicSaleStart.toString(),
      publicSaleEnd: saleDetails.publicSaleEnd.toString(),
      presaleStart: saleDetails.presaleStart.toString(),
      presaleEnd: saleDetails.presaleEnd.toString(),
      presaleMerkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000"
    },
    salesConfigHistory: [{
      publicSalePrice: "string",
      maxSalePurchasePerAddress: "string",
      publicSaleStart: "string",
      publicSaleEnd: "string",
      presaleStart: "string",
      presaleEnd: "string",
      presaleMerkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000"
    }],
    editionMetadata: {
      id: "string",
      description: metadata.description,
      imageURI: metadata.image,
      contractURI: "string",
      animationURI: metadata.animation_url,
    },
    sales: [{
      id: "string",
      pricePerToken: "string",
      priceTotal: "string",
      count: "string",
      purchaser: "string",
      firstPurchasedTokenId: 0,
      txn: {
        id: "string",
        block: "string",
        timestamp: "string"
      }
    }],
    transfers: [{
      id: "string",
      tokenId: "string",
      to: "string",
      from: "string",
      txn: {
        id: "string",
        block: "string",
        timestamp: "string"
      }
    }],
    totalMinted: saleDetails.totalMinted.toString(),
    maxSupply: saleDetails.maxSupply.toString(),
    txn: {
      id: "string",
      block: "string",
      timestamp: "string"
    }
  }
  console.log("ERC721DROP", erc721Drop)

  return {
    props: { collection: erc721Drop, chainId: chain.id },
  }
}
