import { BigNumber, BigNumberish, BytesLike } from 'ethers'

export interface Edition {
  name: string
  symbol: string
  description: string
  price: BigNumber
  maxSupply: BigNumber
  fundsRecipient: string
  royalty: number
  animationURI?: string
  animationHash?: BytesLike
  imageURI?: string
  imageHash?: BytesLike
  maxSalePurchasePerAddress?: string
  isOpenEdition?: number
  publicSaleStart?: Date
  publicSaleEnd?: Date
}

export interface EditionForm {
  name: string
  symbol: string
  description: string
  price: string
  royalty: number
  fundsRecipient: string
  maxSalePurchasePerAddress?: string
  maxSupply: string
  fileInput: Blob
  confirm: boolean
  isOpenEdition?: number
  publicSaleStart?: Date
  publicSaleEnd?: Date
}

export interface EditionSalesConfig {
  publicSalePrice: BigNumberish
  maxSalePurchasePerAddress: BigNumberish
  publicSaleStart: BigNumberish
  publicSaleEnd: BigNumberish
  presaleStart: BigNumberish
  presaleEnd: BigNumberish
  presaleMerkleRoot: BytesLike
}

export interface EditionSalesConfigForm {
  publicSalePrice: number
  maxSalePurchasePerAddress: number
}
