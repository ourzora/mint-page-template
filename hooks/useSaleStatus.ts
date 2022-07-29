import { SubgraphERC721Drop } from 'models/subgraph'
import { HashZero } from '@ethersproject/constants'

export function useSaleStatus({
  collection,
  presale = false,
}: {
  collection: SubgraphERC721Drop
  presale?: boolean
}) {
  const startDate = presale
    ? Number(collection.salesConfig.presaleStart) * 1000
    : Number(collection.salesConfig.publicSaleStart) * 1000
  const endDate = presale
    ? Number(collection.salesConfig.presaleEnd) * 1000
    : Number(collection.salesConfig.publicSaleEnd) * 1000

  const isSoldOut = parseInt(collection.totalMinted) >= parseInt(collection.maxSupply)

  const saleIsActive = startDate <= Date.now() && endDate > Date.now()

  const saleNotStarted = startDate > Date.now()

  const saleIsFinished = endDate < Date.now()

  const presaleExists = collection.salesConfig.presaleMerkleRoot !== HashZero.toString()

  const presaleIsActive =
    presaleExists &&
    Number(collection.salesConfig.presaleStart) * 1000 <= Date.now() &&
    Number(collection.salesConfig.presaleEnd) * 1000 > Date.now()

  return {
    startDate,
    endDate,
    isSoldOut,
    saleIsActive,
    saleNotStarted,
    saleIsFinished,
    presaleExists,
    presaleIsActive,
  }
}

