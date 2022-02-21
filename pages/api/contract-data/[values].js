import { ethers } from 'ethers'
import shortHash from 'shorthash2'
import fs from 'fs'
import path from 'path'

import Contract from '../../../contracts/artifacts/contracts/YourContract.sol/YourContract.json'
import { chains } from '../../../lib/chains'

const extractContractData = async (contract, ...args) => {
  try {
    const o = await Promise.all(
      args.map(async (k) => {
        try {
          return [k, await contract[k]()]
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

const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
const chain = chains.find((x) => x.id == chainId)?.rpcUrls[0]
const getContractData = async (values) => {
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    Contract.abi,
    new ethers.providers.JsonRpcProvider(chain)
  )

  const data = await extractContractData(contract, ...values.split(','))
  return data
}

export default async function handler(req, res) {
  const { values } = req.query
  const hash = shortHash(`${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS},${values}`)
  const CACHE_PATH = path.resolve(`.contract-data-${hash.replace('0x', '')}`)

  let cachedData
  try {
    cachedData = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
  } catch (error) {}

  if (!cachedData) {
    const data = await getContractData(values)
    if (!data.error) {
      try {
        fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf8')
      } catch (error) {
        console.log(error)
      }
    } else {
      // Error
      console.log(data)
    }
    cachedData = data
  }

  // Cache for the max, 31 days
  //res.setHeader("Cache-Control", `public, max-age=2678400`);
  res.status(200).json(cachedData)
}
