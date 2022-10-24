import { HashZero } from '@ethersproject/constants'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'

export function useSaleStatus({
  collection,
  presale = false,
}: {
  collection: ERC721DropProviderState
  presale?: boolean
}) {
  const presaleStart = Number(collection.salesConfig?.presaleStart) * 1000
  const presaleEnd = Number(collection.salesConfig?.presaleEnd) * 1000
  const publicSaleStart = Number(collection.salesConfig?.publicSaleStart) * 1000
  const publicSaleEnd = Number(collection.salesConfig?.publicSaleEnd) * 1000

  const startDate = presale ? presaleStart : publicSaleStart
  const endDate = presale ? presaleEnd : publicSaleEnd

  const isSoldOut =
    collection.maxSupply &&
    collection.totalMinted &&
    collection.totalMinted >= collection.maxSupply
  const saleIsActive = startDate <= Date.now() && endDate > Date.now()
  const saleNotStarted = startDate > Date.now()
  const saleIsFinished = endDate < Date.now()

  const publicSaleExists = publicSaleStart + publicSaleEnd > 0
  const presaleExists = presaleStart + presaleEnd > 0

  const merkleRootExists =
    collection.salesConfig?.presaleMerkleRoot !== HashZero.toString()

  const presaleIsActive =
    merkleRootExists && presaleStart <= Date.now() && presaleEnd > Date.now()

  return {
    startDate,
    endDate,
    isSoldOut,
    saleIsActive,
    saleNotStarted,
    saleIsFinished,
    merkleRootExists,
    presaleExists,
    publicSaleExists,
    presaleIsActive,
  }
}
