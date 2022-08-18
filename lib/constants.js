export const {
  baseUrl,
  chainId,
  collectionAddresses,
  imageHost,
  imageHostAppend,
  alchemyId,
  dateOptions,
  OPEN_EDITION_SIZE,
  DROPS_METADATA_RENDERER
} = {
  collectionAddresses: process.env.NEXT_PUBLIC_CONTRACT_ADDRESSES.split(/[,]+\s*/),
  baseUrl: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL,
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
  imageHost: process.env.NEXT_PUBLIC_IMAGE_HOST || 'https://ipfs.io/ipfs/',
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
  ],
  DROPS_METADATA_RENDERER:
    process.env.NEXT_PUBLIC_CHAIN_ID === '4'
      ? '0xdd7900dccef58aa442d84d443d2525aad4f6e80b'
      : '0x5914d9a241008b9f02f22811bf3a77e02b84d226'
}

