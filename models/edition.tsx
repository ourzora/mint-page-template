import { BigNumber, BytesLike } from 'ethers'

export interface Edition {
  name: string
  symbol: string
  description: string
  price: BigNumber
  maxSupply: BigNumber
  royalty: number
  animationURI?: string
  animationHash?: BytesLike
  imageURI?: string
  imageHash?: BytesLike
}

export interface EditionForm {
  name: string
  symbol: string
  description: string
  price: string
  royalty: number
  maxSupply: string
  confirm: boolean
}

export interface EditionSalesConfig {
  publicSalePrice: BigNumber
  maxSalePurchasePerAddress: BigNumber
  publicSaleStart: BigNumber
  publicSaleEnd: BigNumber
  presaleStart: BigNumber
  presaleEnd: BigNumber
  presaleMerkleRoot: BytesLike
}

export interface EditionSaleDetails extends EditionSalesConfig {
  publicSaleActive: boolean
  presaleActive: boolean
  totalMinted: BigNumber
  maxSupply: BigNumber
}

export interface EditionSalesConfigForm {
  publicSalePrice: number
  maxSalePurchasePerAddress: number
}
