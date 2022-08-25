import { ethers, utils } from 'ethers'
import { GetStaticProps } from 'next'
import { ipfsImage } from '@lib/helpers'
import abi from '@lib/WAYSPACE-abi.json'
import getDefaultProvider from '@lib/getDefaultProvider'
import { allChains } from 'wagmi'
import HomePage from '@components/HomePage/HomePage'

const MintPage = ({collection, chainId}) => <HomePage collection={collection} chainId={chainId} />
export default MintPage;

export const getServerSideProps: GetStaticProps = async (context) => {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
  
  // Create Ethers Contract
  const chain = allChains.find(
    (chain) => chain.id.toString() === chainId
  )
  const provider = getDefaultProvider(chain.network, chainId);
  const contract = new ethers.Contract(contractAddress.toString(), abi, provider);

  // Get metadata renderer
  const songURI = await contract.songURI(1);
  const metadataURI = ipfsImage(songURI)
  const axios = require('axios').default;
  const {data: metadata} = await axios.get(metadataURI)

  // Get Sale Details
  const saleDetails = await contract.saleDetails();
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

  return {
    props: { collection: erc721Drop, chainId: chain.id },
  }
}
