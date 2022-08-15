const { ethers } = require('ethers')

const getDefaultProvider = (networkName, chainId) => {
  return chainId
    ? ethers.getDefaultProvider(
        networkName?.includes('mum')
          ? 'https://rpc-mumbai.maticvigil.com'
          : { chainId: parseInt(chainId.toString()), name: networkName }
      )
    : null
}

export default getDefaultProvider
