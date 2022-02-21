import { useEffect } from 'react'
import { useProvider, useContractRead } from 'wagmi'

export const useContractMethod = (abi, method) => {
  const provider = useProvider()
  const [
    { data: contractResponse, error: contractError, loading: contractLoading },
    read,
  ] = useContractRead(
    {
      addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractInterface: abi,
      signerOrProvider: provider,
    },
    method
  )

  useEffect(() => read(), [])

  return {
    contractResponse,
    contractError,
    contractLoading,
  }
}
