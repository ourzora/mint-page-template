import { Button } from 'degen'
import { useAccount, useSigner, useNetwork } from 'wagmi'
import { ethers } from 'ethers'
import abi from '@lib/ZoraNFTCreatorV1-abi.json'
// import getFactoryAddress from '@/utils/getFactoryAddress'

const CreateDropButton = () => {
  const { data: account } = useAccount()
  const { activeChain } = useNetwork()
  const { data: signer } = useSigner()

  console.log('ADDRESS', account)
  console.log('chain', activeChain)
  const contractAddress = '0xC551Fc4fBadc6dF12C4f98C6956E000990929837'
  const contract = new ethers.Contract(contractAddress, abi, signer)

  const handleClick = async () => {
    console.log('contract', contract)
    const receipt = await createDrop()
    console.log('RECEIPT', receipt)
  }
  const createDrop = () => {
    const name = 'sweets the engineer'
    const symbol = 'MUSIC'
    const defaultAdmin = account.address
    const editionSize = 1000000
    const royaltyBps = 300
    const fundsRecipient = account.address
    // SALE CONFIG
    const publicSalePrice = '10000000000000000'
    const maxSalePurchasePerAddress = 0
    const publicSaleStart = Math.round(Date.now() / 1000)
    const publicSaleEnd = publicSaleStart + 86400
    const presaleStart = 0
    const presaleEnd = 0
    const presaleMerkleRoot =
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    // END SALE CONFIG
    const metadataURIBase =
      'ipfs://bafkreihpvyzqb76nupvb5tukbx55ypnldy6bhcg2qa3ocsuangmcy2sgxi?'
    const metadataContractURI =
      'ipfs://bafkreihpvyzqb76nupvb5tukbx55ypnldy6bhcg2qa3ocsuangmcy2sgxi?'
    return contract
      .createDrop(
        name,
        symbol,
        defaultAdmin,
        editionSize,
        royaltyBps,
        fundsRecipient,
        [
          publicSalePrice,
          maxSalePurchasePerAddress,
          publicSaleStart,
          publicSaleEnd,
          presaleStart,
          presaleEnd,
          presaleMerkleRoot,
        ],
        metadataURIBase,
        metadataContractURI
      )
      .then(async (tx) => {
        const receipt = await tx.wait()
        return receipt
      })
  }
  return <Button onClick={handleClick}>Create Drop</Button>
}

export default CreateDropButton
