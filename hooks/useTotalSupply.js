import { useProvider, useContractRead } from 'wagmi'

export const useTotalSupply = (abi) => {
  const provider = useProvider()
  const [{ data: totalSupply, error: contractError, loading: contractLoading }, read] =
    useContractRead(
      {
        addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        contractInterface: abi,
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
