export const chains = [
  {
    id: 31337,
    name: "hardhat",
    testnet: false,
    rpcUrls: ["http://localhost:8545"],
  },
  {
    id: 1,
    name: "Mainnet",
    rpcUrls: [process.env.NEXT_PUBLIC_RPC_URL],
  },
  {
    id: 4,
    name: "Rinkeby",
    testnet: true,
    rpcUrls: [process.env.NEXT_PUBLIC_RINKEBY_RPC_URL],
  },
];
