import { useState } from 'react'
import { imageHost, imageHostAppend } from '@lib/constants'
import { utils, BigNumber } from 'ethers'

export const ipfsImage = (url) =>
  url.indexOf('ipfs://') > -1 ? url.replace('ipfs://', imageHost) + imageHostAppend : url

export const shortenHash = (hash, num = 4) => {
  if (!hash) return hash
  if (!hash.startsWith('0x')) hash = `0x${hash}`

  return (
    <span>
      {hash.slice(0, num + 2)}
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

// const web3Provider = new providers.CloudflareProvider();
export const Address = ({ address }) => {
  const pureAddress = utils.getAddress(address)
  const [ens, setEns] = useState(false)
  // try {
  //   useEffect(() => {
  //     const func = async () => {
  //       const ens = await web3Provider.lookupAddress(pureAddress);
  //       if (ens) setEns(ens);
  //     };
  //     func();
  //   }, [address]);
  // } catch (e) {}

  return ens || shortenHash(pureAddress)
}

export const getWethSaleFromLogs = (token, eventLogs) => {
  const iface = new utils.Interface([
    'event OrdersMatched (bytes32 buyHash, bytes32 sellHash, address indexed maker, address indexed taker, uint256 price, bytes32 indexed metadata)',
    'event Transfer (address indexed from, address indexed to, uint256 indexed tokenId)',
  ])

  const logs = eventLogs.slice().sort((a, b) => a.logIndex - b.logIndex)

  let match = false
  logs.forEach((log, i) => {
    try {
      const data = iface.parseLog({
        data: log.data,
        topics: log.topics,
      })

      if (
        data.name === 'Transfer' &&
        data.args.tokenId &&
        token.tokenId === data.args.tokenId.toString()
      ) {
        try {
          let nextData = { name: '' }
          let j = i
          while (j < logs.length && nextData.name !== 'OrdersMatched') {
            const nextLog = logs[j + 1]
            if (nextLog) {
              try {
                nextData = iface.parseLog({
                  data: nextLog.data,
                  topics: nextLog.topics,
                })
              } catch (e) {}
              // console.log( "tokenId:", token.tokenId, logs.length, nextData.name);
              if (nextData && nextData.name === 'OrdersMatched') {
                match = nextData
                break
              }
            }
            j++
          }
        } catch (e) {
          console.log(e)
        }
      }
    } catch (e) {}
  })
  return match
}
