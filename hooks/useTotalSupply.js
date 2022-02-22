import { BigNumber } from 'ethers'
import { useProvider, useContractRead } from 'wagmi'

export const useTotalSupply = (abi) => {
  const provider = useProvider()
  const [{ data, error: contractError, loading: contractLoading }, read] =
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
      totalSupply: data && BigNumber.from(data).toString(),
      contractError,
      contractLoading,
    },
    read,
  ]
}
