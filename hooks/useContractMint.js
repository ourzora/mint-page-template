import { useState, useEffect } from 'react'
import { utils, BigNumber } from 'ethers'
import { useSigner, useContract } from 'wagmi'

export const useContractMint = (abi) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAwaitingApproval, setIsAwaitingApproval] = useState()
  const [isMinting, setIsMinting] = useState()
  const [isSuccess, setIsSuccess] = useState()
  const [txHash, setTxHash] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()

  const [{ data: signer }] = useSigner()
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signer,
  })

  useEffect(() => {
    setIsLoading(false)
  }, [contract])

  const mint = async ({ mintPrice, quantity }) => {
    try {
      setError(false)
      setIsAwaitingApproval(true)
      const price = BigNumber.from(mintPrice)
      const totalCost = utils.formatEther(price.mul(quantity))
      const params = { value: utils.parseEther(totalCost) }

      try {
        const gasEstimate = await contract.estimateGas.mint(quantity, params)
        params['gasLimit'] = gasEstimate.mul(120).div(100)
      } catch (e) {
        console.log(e)
      }
      const tx = await contract.mint(quantity, params)
      setIsAwaitingApproval(false)
      setIsMinting(true)
      setTxHash(tx.hash)
      const receipt = await tx.wait(
        process.env.NEXT_PUBLIC_BASE_URL.indexOf('localhost') > -1 ? 1 : 2
      )
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
      txHash,
    },
    mint,
  ]
}
