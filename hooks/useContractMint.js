import { useState, useEffect } from 'react'
import { utils, BigNumber } from 'ethers'
import { useSigner, useContract } from 'wagmi'
import { contractAddress, baseUrl } from '@lib/constants'

export const useContractMint = (abi) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAwaitingApproval, setIsAwaitingApproval] = useState()
  const [isMinting, setIsMinting] = useState()
  const [isSuccess, setIsSuccess] = useState()
  const [txHash, setTxHash] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [quantity, setQuantity] = useState(1)

  const [{ data: signer }] = useSigner()
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: abi,
    signerOrProvider: signer,
  })

  useEffect(() => {
    setIsLoading(false)
  }, [contract])

  const mint = async ({ mintPrice, quantity, method = 'mint', args = [] }) => {
    try {
      setError(false)
      setIsAwaitingApproval(true)
      setQuantity(quantity)
      const price = BigNumber.from(mintPrice)
      const totalCost = utils.formatEther(price.mul(quantity))
      const params = { value: utils.parseEther(totalCost) }

      const gasEstimate = await contract.estimateGas[method](quantity, ...args, params)
      params['gasLimit'] = gasEstimate.mul(120).div(100)

      const tx = await contract[method](quantity, ...args, params)
      setIsAwaitingApproval(false)
      setIsMinting(true)
      setTxHash(tx.hash)
      const receipt = await tx.wait(baseUrl.indexOf('localhost') > -1 ? 1 : 2)
      setData(receipt.events.pop())
      setIsMinting(false)
      setIsSuccess(true)
    } catch (e) {
      setIsMinting(false)
      setIsAwaitingApproval(false)
      setError(e.data?.message || e.message)
    }
  }

  return [
    {
      isLoading,
      isAwaitingApproval,
      isMinting,
      isSuccess,
      data,
      error,
      mintQuantity: quantity,
      txHash,
    },
    mint,
  ]
}
