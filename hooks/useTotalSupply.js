import { useEffect } from 'react'
import Contract from '@contracts/artifacts/contracts/YOURCONTRACT.sol/YOURCONTRACT.json'
import { useProvider, useContractRead } from 'wagmi'

export const useTotalSupply = () => {
  const provider = useProvider()
  const [{ data: totalSupply, error: contractError, loading: contractLoading }, read] =
    useContractRead(
      {
        addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        contractInterface: Contract.abi,
        signerOrProvider: provider,
      },
      'totalSupply'
    )

  return [
    {
      totalSupply,
      contractError,
      contractLoading,
    },
    read,
  ]
}
