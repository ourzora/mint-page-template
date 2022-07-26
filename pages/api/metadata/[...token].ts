import type { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'
const path = require('path')
const fsp = require('fs').promises
import { existsSync } from 'fs'
import abi from 'lib/abi.json'
import { chains } from 'lib/chains'
import { baseUrl, contractAddress, chainId } from 'lib/constants'

const chain = chains.find((x) => x.id == chainId)?.rpcUrls[0]
const contract = new ethers.Contract(
  contractAddress,
  abi,
  new ethers.providers.StaticJsonRpcProvider(chain)
)

const privateDirectory = path.resolve(process.cwd(), 'private')
const validate = async (id: string, file: string) => {
  try {
    if (file.indexOf('metadata.json') < 0 && file.indexOf('sample') < 0) {
      // Verify token exists
      await contract.tokenURI(Number(id))
    }
    // Verif file exists
    if (!existsSync(file)) {
      throw 'File missing'
    }
  } catch (e) {
    console.log(e)
    return false
  }
  return true
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { token } = req.query
  if (Array.isArray(token)) token = token[0]

  let idsArr = []
  if (token.indexOf('...') > -1) {
    const [start, end] = token.split('...')
    idsArr = Array.from({ length: Number(end) - Number(start) + 1 }, (_, i) =>
      String(i + Number(start))
    )
  } else {
    idsArr = token.split(',').map((x: string) => x.replace('.json', ''))
  }

  return new Promise(async () => {
    let data: any
    try {
      data = await Promise.all(
        idsArr.map(async (id) => {
          const f = path.join(privateDirectory, `${id}.json`)
          if (await validate(id, f)) {
            const file = await fsp.readFile(f, 'utf8')
            const data = JSON.parse(file)
            return {
              ...data,
              // image: `${baseUrl}/api/render/${owner}`,
              // animation_url: `https://meltyverse.vercel.app/?address=${owner}`,
            }
          } else {
            return null
          }
        })
      )
    } catch (e) {
      console.log(e)
    }
    let result = data.filter((x: any) => x !== null)

    if (!!result.length) {
      if (idsArr !== ['metadata']) {
        res.setHeader('Cache-Control', `public, max-age=5000`)
      }
      res.setHeader('Content-type', 'application/json')
      if (result && result.length === 1) result = result[0]
      res.status(200).json(result)
    } else {
      res.status(404).end()
    }
  })
}
