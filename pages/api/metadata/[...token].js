import { ethers } from 'ethers'
const path = require('path')
const fsp = require('fs').promises
import { existsSync } from 'fs'

import Contract from '../../../contracts/artifacts/contracts/YourContract.sol/YourContract.json'
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
const contract = new ethers.Contract(
  contractAddress,
  Contract.abi,
  new ethers.providers.JsonRpcProvider()
)

const privateDirectory = path.resolve(process.cwd(), 'private')
const validate = async (id, file) => {
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
    return false
  }
  return true
}

export default function handler(req, res) {
  const { token } = req.query
  const ids = token.pop()
  const dirs = token.splice(-1)

  let idsArr = []
  if (ids.indexOf('...') > -1) {
    const [start, end] = ids.split('...')
    idsArr = Array.from({ length: end - start + 1 }, (_, i) => String(i + Number(start)))
  } else {
    idsArr = ids.split(',').map((x) => x.replace('.json', ''))
  }

  return new Promise(async () => {
    let data
    try {
      data = await Promise.all(
        idsArr.map(async (id) => {
          const f = path.join(privateDirectory, ...dirs, `${id}.json`)
          if (await validate(id, f)) {
            const file = await fsp.readFile(f, 'utf8')
            return JSON.parse(file)
          } else {
            return null
          }
        })
      )
    } catch (e) {
      console.log(e)
    }
    let result = data.filter((x) => x !== null)

    if (!!result.length) {
      res.setHeader('Cache-Control', `public, max-age=5000`)
      res.setHeader('Content-type', 'application/json')
      if (result && result.length === 1) result = result[0]
      res.status(200).json(result)
    } else {
      res.status(404).end()
    }
  })
}
