const path = require('path')
import { existsSync, readFileSync } from 'fs'
import { stat } from 'fs/promises'
import { ethers } from 'ethers'

import Contract from '@contracts/artifacts/contracts/YOURCONTRACT.sol/YOURCONTRACT.json'
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
const contract = new ethers.Contract(
  contractAddress,
  Contract.abi,
  new ethers.providers.JsonRpcProvider()
)

export default function handler(req, res) {
  return new Promise(async (resolve, reject) => {
    const { token } = req.query
    const tokenStr = token.join('/')

    try {
      const privateDirectory = path.resolve(process.cwd(), 'private')
      const filepath = path.join(privateDirectory, ...token)

      if (tokenStr !== 'metadata.json' && !/^sample\//.test(tokenStr)) {
        // Verify token exists
        await contract.tokenURI(Number(token[token.length - 1].replace('.json', '')))
      }

      // if file is not located in specified folder then stop and end with 404
      if (!existsSync(filepath)) {
        res.status(404) //.json({ err: `${filepath} does not exist` });
        return resolve
      }

      // set cache so its proper cached. not necessary
      // 'private' part means that it should be cached by an invidual(= is intended for single user) and not by single cache. More about in https://stackoverflow.com/questions/12908766/what-is-cache-control-private#answer-49637255
      res.setHeader('Cache-Control', `public, max-age=5000`)

      const stats = await stat(filepath)
      res.setHeader('Content-Length', stats.size)
      res.setHeader('Content-type', 'application/json')

      // Create read stream from path and now its ready to serve to client
      //const file = createReadStream(filepath);
      const file = readFileSync(filepath)

      // Pipe it to the client - with "res" that has been given
      res.send(file)
      res.on('end', resolve)
    } catch (e) {
      //res.json(e);
      //console.log(e)
      res.status(405).end()
      return resolve
    }
  })
}
