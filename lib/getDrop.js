const getDrop = (contractAddress, metadata, saleDetails) => {
  console.log('METADATA', metadata)
  const maxSalePurchasePerAddress =
    saleDetails.maxSalePurchasePerAddress.toString() === '0'
      ? 1000001
      : saleDetails.maxSalePurchasePerAddress.toString()

  return {
    id: 'string',
    created: {
      id: 'string',
      block: 'string',
      timestamp: 'string',
    },
    creator: 'string',
    address: contractAddress,
    name: metadata.name,
    symbol: 'string',
    contractConfig: {
      metadataRenderer: 'string',
      editionSize: 'string',
      royaltyBPS: 'number',
      fundsRecipient: 'string',
    },
    salesConfig: {
      publicSalePrice: saleDetails.publicSalePrice.toString(),
      maxSalePurchasePerAddress,
      publicSaleStart: saleDetails.publicSaleStart.toString(),
      publicSaleEnd: saleDetails.publicSaleEnd.toString(),
      presaleStart: saleDetails.presaleStart.toString(),
      presaleEnd: saleDetails.presaleEnd.toString(),
      presaleMerkleRoot:
        '0x0000000000000000000000000000000000000000000000000000000000000000',
    },
    salesConfigHistory: [
      {
        publicSalePrice: 'string',
        maxSalePurchasePerAddress: 'string',
        publicSaleStart: 'string',
        publicSaleEnd: 'string',
        presaleStart: 'string',
        presaleEnd: 'string',
        presaleMerkleRoot:
          '0x0000000000000000000000000000000000000000000000000000000000000000',
      },
    ],
    editionMetadata: {
      id: 'string',
      description: metadata.description,
      imageURI: metadata.image,
      contractURI: 'string',
      animationURI: metadata.animation_url,
      trackNumber: metadata.trackNumber,
    },
    sales: [
      {
        id: 'string',
        pricePerToken: 'string',
        priceTotal: 'string',
        count: 'string',
        purchaser: 'string',
        firstPurchasedTokenId: 0,
        txn: {
          id: 'string',
          block: 'string',
          timestamp: 'string',
        },
      },
    ],
    transfers: [
      {
        id: 'string',
        tokenId: 'string',
        to: 'string',
        from: 'string',
        txn: {
          id: 'string',
          block: 'string',
          timestamp: 'string',
        },
      },
    ],
    totalMinted: saleDetails.totalMinted.toString(),
    maxSupply: saleDetails.maxSupply.toString(),
    txn: {
      id: 'string',
      block: 'string',
      timestamp: 'string',
    },
  }
}

export default getDrop
