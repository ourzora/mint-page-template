import { BigNumber } from 'ethers'

export const ipfsImage = (url) =>
  url.indexOf('ipfs://') > -1
    ? url.replace('ipfs://', process.env.NEXT_PUBLIC_IMAGE_HOST)
    : url

export const shortenHash = (hash, num = 8) => {
  if (!hash) return hash
  if (!hash.startsWith('0x')) hash = `0x${hash}`

  return (
    <span>
      {hash.slice(0, num)}
      &hellip;
      {hash.slice(0 - num)}
    </span>
  )
}

export const extractContractData = async (contract, ...args) => {
  try {
    const o = await Promise.all(
      args.map(async (k) => {
        try {
          const val = await contract[k]()
          return [k, val._isBigNumber ? BigNumber.from(val).toString() : val]
        } catch (e) {
          return [k, null]
        }
      })
    )
    return Object.fromEntries(o)
  } catch (e) {
    return {
      error: true,
      message: e.toString(),
      ...e,
    }
  }
}
