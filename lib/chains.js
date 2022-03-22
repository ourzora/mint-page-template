import { rpcUrl, rinkebyRpcUrl } from '@lib/constants'

export const chains = [
  {
    id: '1337',
    name: 'hardhat',
    testnet: false,
    rpcUrls: ['http://localhost:8545'],
  },
  {
    id: '1',
    name: 'Mainnet',
    rpcUrls: [rpcUrl],
  },
  {
    id: '4',
    name: 'Rinkeby',
    testnet: true,
    rpcUrls: [rinkebyRpcUrl],
  },
]
