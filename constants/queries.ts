import { gql } from 'graphql-request'

export const SUBGRAPH_URL =
  process.env.NEXT_PUBLIC_CHAIN_ID === '4'
    ? 'https://api.thegraph.com/subgraphs/name/iainnash/erc721droprinkeby'
    : process.env.NEXT_PUBLIC_CHAIN_ID === '5'
    ? 'https://api.thegraph.com/subgraphs/name/iainnash/erc721drop-goerli'
    : 'https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet'

const ERC721_DROP_FRAGMENT = gql`
  fragment ERC721Fields on ERC721Drop {
    id
    created {
      id
      block
      timestamp
    }
    creator
    address
    name
    symbol
    contractConfig {
      id
      metadataRenderer
      editionSize
      royaltyBPS
      fundsRecipient
    }
    editionMetadata {
      imageURI
      contractURI
      description
      animationURI
    }
    salesConfig {
      id
      publicSalePrice
      maxSalePurchasePerAddress
      publicSaleStart
      publicSaleEnd
      presaleStart
      presaleEnd
      presaleMerkleRoot
    }
    totalMinted
    maxSupply
  }
`

export const GET_COLLECTIONS_QUERY = gql`
  query GetCollection($collectionAddresses: [String]!) {
    erc721Drops(
      where: { address_in: $collectionAddresses }
    ) {
      ...ERC721Fields
    }
  }

  ${ERC721_DROP_FRAGMENT}
`
