import { gql } from 'graphql-request'

export const SUBGRAPH_URL =
  process.env.NEXT_PUBLIC_CHAIN_ID === '4'
    ? 'https://api.thegraph.com/subgraphs/name/iainnash/erc721droprinkeby'
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
    salesConfigHistory {
      id
      publicSalePrice
      maxSalePurchasePerAddress
      publicSaleStart
      publicSaleEnd
      presaleStart
      presaleEnd
      presaleMerkleRoot
    }
    sales {
      id
      pricePerToken
      priceTotal
      count
      purchaser
      firstPurchasedTokenId
      txn {
        id
        block
        timestamp
      }
    }
    transfers {
      id
      tokenId
      to
      from
      txn {
        id
        block
        timestamp
      }
    }
    totalMinted
    maxSupply
  }
`

export const GET_COLLECTION_QUERY = gql`
  query GetCollection($collectionAddress: String!) {
    erc721Drop(id: $collectionAddress) {
      ...ERC721Fields
    }
  }

  ${ERC721_DROP_FRAGMENT}
`
