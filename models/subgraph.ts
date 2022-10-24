import { BytesLike } from 'ethers'

export interface SubgraphSalesConfig {
  publicSalePrice: string
  maxSalePurchasePerAddress: string
  publicSaleStart: string
  publicSaleEnd: string
  presaleStart: string
  presaleEnd: string
  presaleMerkleRoot: BytesLike
}

export interface SubgraphTransactionInfo {
  id: string
  block: string
  timestamp: string
}

export interface SubgraphNFTEditionSale {
  id: string
  pricePerToken: string
  priceTotal: string
  count: string
  purchaser: string
  firstPurchasedTokenId: number
  txn: SubgraphTransactionInfo
}

export interface SubgraphNFTEditionTransfer {
  id: string
  tokenId: string
  to: string
  from: string
  txn: SubgraphTransactionInfo
}

export interface SubgraphContractConfig {
  metadataRenderer: string
  editionSize: string
  royaltyBPS: number
  fundsRecipient: string
}

export interface SubgraphTokenMetadata {
  name: string
  description: string
  image: string
}

export interface SubgraphEditionMetadata {
  id?: string
  description: string
  imageURI: string
  contractURI: string
  animationURI: string
}

export interface SubgraphERC721Drop {
  id: string
  created: SubgraphTransactionInfo
  creator: string
  owner: string
  address: string
  name: string
  symbol: string
  contractConfig: SubgraphContractConfig
  salesConfig: SubgraphSalesConfig
  salesConfigHistory: Array<SubgraphSalesConfig>
  editionMetadata: SubgraphEditionMetadata
  sales: Array<SubgraphNFTEditionSale>
  transfers: Array<SubgraphNFTEditionTransfer>
  totalMinted: string
  maxSupply: string
  txn: SubgraphTransactionInfo
}

export interface RPCProviderERC721Drop {
  id: string
  created: SubgraphTransactionInfo
  creator: string
  owner: string
  address: string
  name: string
  symbol: string
  contractConfig: SubgraphContractConfig
  salesConfigId: string
  salesConfig: SubgraphSalesConfig
  salesConfigHistory: Array<SubgraphSalesConfig>
  sales: Array<SubgraphNFTEditionSale>
  transfers: Array<SubgraphNFTEditionTransfer>
  totalMinted: string
  maxSupply: string
  txn: SubgraphTransactionInfo

  // CAUTION: this may be subject to change, depending on galactus/subgraph signature
  tokenURI: string
}
