import { BigNumber } from 'ethers'
import { useProvider, useContractRead } from 'wagmi'
import { contractAddress } from '@lib/constants'

export const useTotalSupply = (abi) => {
  const provider = useProvider()
  const [{ data, error: contractError, loading: contractLoading }, read] =
    useContractRead(
      {
        addressOrName: contractAddress,
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
