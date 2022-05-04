import { BigNumber } from 'ethers'
import { imageHost, imageHostAppend } from '@lib/constants'

export const ipfsImage = (url) =>
  url.indexOf('ipfs://') > -1 ? url.replace('ipfs://', imageHost) + imageHostAppend : url

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

export const parseContractDetails = (data) => {
  const arr = Object.entries(data).map(([k, v]) => {
    if (typeof v === 'object' && !v._isBigNumber) {
      // Recurse into objects
      v = parseContractDetails(v)
    } else if (/\d/.test(k)) {
      // Skip the 0: 1: 2: array index items
      return [null, null]
    } else {
      // Turn big numbers into numbers
      v = v._isBigNumber ? BigNumber.from(v).toString() : String(v)
    }
    return [k, v]
  })

  const o = Object.fromEntries(arr)
  delete o[null]
  return o
}

export const extractContractData = async (contract, ...args) => {
  try {
    const o = await Promise.all(
      args.map(async (k) => {
        try {
          const val = await contract[k]()
          return [k, val]
        } catch (e) {
          return [k, null]
        }
      })
    )
    return parseContractDetails(Object.fromEntries(o))
  } catch (e) {
    return {
      error: true,
      message: e.toString(),
      ...e,
    }
  }
}
