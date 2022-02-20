import { useEffect } from 'react'
import { useProvider, useContractRead } from 'wagmi'

export const useContractPaused = (abi) => {
  const provider = useProvider()
  const [{ data: contractPaused, error: contractError, loading: contractLoading }, read] =
    useContractRead(
      {
        addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        contractInterface: abi,
        signerOrProvider: provider,
      },
      'paused'
    )

  useEffect(() => read(), [])

  return {
    contractPaused,
    contractError,
    contractLoading,
  }
}
