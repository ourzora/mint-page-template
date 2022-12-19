import { ZDKChain, ZDKNetwork } from '@zoralabs/zdk'
import { Network } from 'alchemy-sdk'

export type LowercaseAddress = Lowercase<`0x${string}`>

type AddressMap = {
  [x: number]: LowercaseAddress[]
}

const creatorProxyAddresses: { [x: number]: LowercaseAddress } = {
  1: '0xf74b146ce44cc162b601dec3be331784db111dc1',
  4: '0x2d2acd205bd6d9d0b3e79990e093768375ad3a30',
  5: '0xb9583d05ba9ba8f7f14ccee3da10d2bc0a72f519',
}

const editionMetadataRendererAddresses: AddressMap = {
  1: [
    '0x192ce8267cbab9c3c477d61e85d7f0c5fe3b46af',
    '0xd167b7a408c65306d5a2abead63986540110b28b',
    '0xbae11704b019abf8aacd3e6859954277e158716c',
  ],
  4: ['0xc6f0a9d9e021d858356cf4cea933e04bfd7f4e00'],
  5: [
    '0x2f5c21ef9ddff9a1fe76a1c55dd5112fcf2efd39',
    '0x994decc8802b9bc846c03f6a6eaf5f7876e7428f',
  ],
}
const dropMetadataRendererAddresses: AddressMap = {
  1: ['0x5914d9a241008b9f02f22811bf3a77e02b84d226'],
  4: ['0xdd7900dccef58aa442d84d443d2525aad4f6e80b'],
  5: [
    '0x5956fd16c4d8c4b4711f2551971abb7c2f4af677',
    '0xb2aa32a3231cf47412214b38a000baeebfa66b9b',
  ],
}

const operatorFilterRegistryAddresses: { [x: number]: `0x${string}` } = {
  1: '0x000000000000AAeB6D7670E522A718067333cd4E',
  5: '0x000000000000AAeB6D7670E522A718067333cd4E',
}

export const OPERATOR_FILTER_REGISTRY_ADDRESS =
  operatorFilterRegistryAddresses[Number(process.env.NEXT_PUBLIC_CHAIN_ID) || 1]

export const CREATOR_PROXY_ADDRESS =
  creatorProxyAddresses[Number(process.env.NEXT_PUBLIC_CHAIN_ID) || 1]

export const EDITIONS_METADATA_RENDERER =
  editionMetadataRendererAddresses[Number(process.env.NEXT_PUBLIC_CHAIN_ID) || 1]

export const DROPS_METADATA_RENDERER =
  dropMetadataRendererAddresses[Number(process.env.NEXT_PUBLIC_CHAIN_ID) || 1]

export const SUPER_ADMINS: LowercaseAddress[] = [
  '0x4492ecacb5da5d933af0e55eedad4383bf8d2db5', // kolber main
  '0x83efc260da533b0b03d88b2f00d59785277c4e71', // kolber rinkeby
  '0x24e5b063fbfa23a168148d102a239c139ad83cc7', // joe main
  '0x256e018101dedc1b386c8719fc8bf56c733dfa28', // joe rinkeby
  '0xf7b2c2eb58a5f801119df7e9bf9f9b66c62bb011', // lil
  '0x85a58d1a453a5e658bba7a2b5cca3fa64a5e20b1', // lenz hotwallet
  '0xf14116ba409718457f09e6cb906467ef7f2e3622', // josh
]

export const NETWORK_NAME =
  { 1: '', 4: 'Rinkeby', 5: 'Goerli' }[process.env.NEXT_PUBLIC_CHAIN_ID || 1] || ''

export const NETWORKS = {
  1: Network.ETH_MAINNET,
  4: Network.ETH_RINKEBY,
  5: Network.ETH_GOERLI,
}[process.env.NEXT_PUBLIC_CHAIN_ID || 1]

export const ZDKNETWORKS = [
  {
    chain: {
      1: ZDKChain.Mainnet,
      4: ZDKChain.Rinkeby,
      5: ZDKChain.Goerli,
    }[process.env.NEXT_PUBLIC_CHAIN_ID || 1],
    network: ZDKNetwork.Ethereum,
  },
]

export const CREATE_URL =
  process.env.NEXT_PUBLIC_CHAIN_ID === '1'
    ? 'https://create.zora.co'
    : 'https://testnet.create.zora.co'

const OPEN_SEA_URL = 'https://testnets.opensea.io/assets/goerli'
const ZORA_MARKET_URL = 'https://market.zora.co/collections'
export const MARKET_URL =
  process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? ZORA_MARKET_URL : OPEN_SEA_URL

