
/************************************

  PUT YOUR CONTRACT ADDRESSES HERE

************************************/

// const collectionAddressesList = ['0xd1510f0cfb647a438baa570c85ef9d8c7d24595f', '0x1ff38fd847936b1afc70c9919811b8864f0c3f3d']
const collectionAddressesList = ['0xd1510f0cfb647a438baa570c85ef9d8c7d24595f']

/************************************/
export const {
  baseUrl,
  chainId,
  collectionAddresses,
  imageHost,
  imageHostAppend,
  alchemyId,
  dateOptions,
  OPEN_EDITION_SIZE,
} = {
  collectionAddresses: collectionAddressesList,
  baseUrl: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL,
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
  imageHost: process.env.NEXT_PUBLIC_IMAGE_HOST,
  imageHostAppend: process.env.NEXT_PUBLIC_IMAGE_HOST_APPEND || '',
  alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  OPEN_EDITION_SIZE: 1000000,
  dateOptions: [
    'en-us',
    {
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    },
  ]
}
