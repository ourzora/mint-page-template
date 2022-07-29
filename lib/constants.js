export const {
  title,
  description,
  baseUrl,
  chainId,
  contractAddress,
  imageHost,
  imageHostAppend,
  alchemyId,
  launchTime,
  presaleLaunchTime,
  dateOptions,
  OPEN_EDITION_SIZE,
} = {
  title: process.env.NEXT_PUBLIC_TITLE,
  decription: process.env.NEXT_PUBLIC_DESCRIPTION,
  baseUrl: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_BASE_URL,
  chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
  contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  imageHost: process.env.NEXT_PUBLIC_IMAGE_HOST,
  imageHostAppend: process.env.NEXT_PUBLIC_IMAGE_HOST_APPEND || '',
  alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  presaleLaunchTime: process.env.NEXT_PUBLIC_PRESALE_LAUNCH_TIME,
  launchTime: process.env.NEXT_PUBLIC_LAUNCH_TIME,
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
