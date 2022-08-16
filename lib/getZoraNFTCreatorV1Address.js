const getZoraNFTCreatorV1Address = (chainId) => {
  if (chainId === 80001) {
    return '0xC551Fc4fBadc6dF12C4f98C6956E000990929837'
  }
  if (chainId === 5) {
    return '0x314dE0B249D94241FB9601D77439aEB5870B2dA2'
  }
  return '0x314dE0B249D94241FB9601D77439aEB5870B2dA2'
}

export default getZoraNFTCreatorV1Address
