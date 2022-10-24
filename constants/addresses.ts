import { ZDKChain, ZDKNetwork } from '@zoralabs/zdk'
import { Network } from 'alchemy-sdk'

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

export const CREATOR_PROXY_ADDRESS =
  {
    1: '0xf74b146ce44cc162b601dec3be331784db111dc1',
    4: '0x2d2acd205bd6d9d0b3e79990e093768375ad3a30',
    5: '0xb9583D05Ba9ba8f7F14CCEe3Da10D2bc0A72f519',
  }[process.env.NEXT_PUBLIC_CHAIN_ID || 1] || ''

export const EDITIONS_METADATA_RENDERER =
  {
    1: [
      '0xd167b7a408c65306d5a2abead63986540110b28b',
      '0xbae11704b019abf8aacd3e6859954277e158716c',
    ],
    4: ['0xc6f0a9d9e021d858356cf4cea933e04bfd7f4e00'],
    5: ['0x994decc8802b9bc846c03f6a6eaf5f7876e7428f'],
  }[process.env.NEXT_PUBLIC_CHAIN_ID || 1] || ''

export const DROPS_METADATA_RENDERER =
  {
    1: ['0x5914d9a241008b9f02f22811bf3a77e02b84d226'],
    4: ['0xdd7900dccef58aa442d84d443d2525aad4f6e80b'],
    5: ['0xb2aa32a3231cf47412214b38a000baeebfa66b9b'],
  }[process.env.NEXT_PUBLIC_CHAIN_ID || 1] || ''

export const SUPER_ADMINS = [
  '0x4492eCACB5da5D933af0e55eEDad4383BF8D2dB5', // kolber main
  '0x83eFc260Da533B0B03d88b2F00d59785277c4e71', // kolber rinkeby
  '0x24e5B063fBfa23A168148d102A239C139Ad83cC7', // joe main
  '0x256e018101dEDC1b386C8719FC8BF56c733dFa28', // joe rinkeby
  '0xf7B2C2eb58A5F801119dF7e9bF9f9b66C62bB011', // lil
  '0x85a58D1A453A5E658Bba7A2b5cCA3fA64A5E20B1', // lenz hotwallet
]
