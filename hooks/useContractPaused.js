import { useEffect } from 'react'
import Contract from '@contracts/artifacts/contracts/YOURCONTRACT.sol/YOURCONTRACT.json'
import { useProvider, useContractRead } from 'wagmi'

export const useContractPaused = () => {
  const provider = useProvider()
  const [{ data: contractPaused, error: contractError, loading: contractLoading }, read] =
    useContractRead(
      {
        addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        contractInterface: Contract.abi,
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
