import { ethers } from 'ethers'
import { chains } from '@lib/chains'
import { contractAddress, chainId } from '@lib/constants'
import abi from '@lib/abi.json'
import { BigNumber } from 'ethers'
import { getAddress } from '@ethersproject/address'
import { imageHost, imageHostAppend } from '@lib/constants'

export const ipfsImage = (url) =>
  url.indexOf('ipfs://') > -1 ? url.replace('ipfs://', imageHost) + imageHostAppend : url


export function isAddress(value) {
  try {
    return getAddress(value)
  } catch (e) {
    return false
  }
}

export function shortenAddress(address, chars = 4, validate = true) {
  if (!address) {
    return ''
  }

  if (/\.eth$/.test(address)) {
    return address
  }

  let parsed = ''
  if (validate) {
    parsed = isAddress(address)
    if (!parsed) {
      //console.error(`Invalid 'address' parameter '${address}'.`)
      return ''
    }
  } else {
    parsed = address
  }
  return chars * 2 + 2 > parsed.length
    ? parsed
    : `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
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
          console.log(e)
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

export const getContractData = async (...props) => {
  try {
    const chain = chains.find((x) => x.id == chainId)?.rpcUrls[0]
    const contract = new ethers.Contract(
      contractAddress,
      abi,
      new ethers.providers.StaticJsonRpcProvider(chain)
    )

    const data = await extractContractData(contract, ...props)
    return data
  } catch (e) {
    return { error: e }
  }
}
