// import { useEffect } from 'react'
import abi from '@lib/abi.json'
import { useProvider, useContractRead } from 'wagmi'

export const useContractMethod = (method) => {
  const provider = useProvider()
  const {
    data: contractData,
    error: contractError,
    isLoading: contractLoading,
  } = useContractRead(
    {
      addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractInterface: abi,
      signerOrProvider: provider,
    },
    method
  )

  // useEffect(() => refetch(), [])

  return {
    contractData,
    contractError,
    contractLoading,
  }
}
