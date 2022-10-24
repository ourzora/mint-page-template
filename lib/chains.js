const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID

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
    rpcUrls: [`https://eth-mainnet.alchemyapi.io/v2/${alchemyId}`],
  },
  {
    id: '4',
    name: 'Rinkeby',
    testnet: true,
    rpcUrls: [`https://eth-rinkeby.alchemyapi.io/v2/${alchemyId}`],
  },
]
