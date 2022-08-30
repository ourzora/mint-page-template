import { ethers, utils } from 'ethers'
import { GetStaticProps } from 'next'
import { ipfsImage } from '@lib/helpers'
import abi from '@lib/WAYSPACE-abi.json'
import getDefaultProvider from '@lib/getDefaultProvider'
import getDrop from '@lib/getDrop'
import { allChains } from 'wagmi'
import HomePage from '@components/HomePage/HomePage'

const MintPage = ({collection, chainId, collection2}) => <HomePage collection={collection} chainId={chainId} collectionTwo={collection2} />
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
  const songURI2 = await contract.songURI(2);
  
  const metadataURI = ipfsImage(songURI)
  const metadataURI2 = ipfsImage(songURI2)
  console.log("metadataURI", metadataURI)
  console.log("metadataURI2", metadataURI2)
  const axios = require('axios').default;
  const {data: metadata} = await axios.get(metadataURI)
  const {data: metadata2} = await axios.get(metadataURI2)
  // Get Sale Details
  const saleDetails = await contract.saleDetails();
  const erc721Drop = getDrop(contractAddress, metadata, saleDetails)
  const erc721Drop2 = getDrop(contractAddress, metadata2, saleDetails)
  console.log("ERC721Drop", erc721Drop)
  console.log("ERC721Drop2", erc721Drop2)

  return {
    props: { collection: erc721Drop, chainId: chain.id, collection2: erc721Drop2 },
  }
}
