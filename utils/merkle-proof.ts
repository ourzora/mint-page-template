import { MerkleTree } from 'merkletreejs'
import { utils } from 'ethers'
import keccak256 from 'keccak256'
import type { BigNumber } from 'ethers'

interface EntryType {
  minter: string
  maxCount: string
  price: string
}

export interface AllowListEntry {
  maxCount: string
  minter: string
  price: BigNumber
  proof: string[]
}

export function hashForEntry(entry: EntryType) {
  try {
    return keccak256(
      utils.defaultAbiCoder.encode(
        ['address', 'uint256', 'uint256'],
        [
          utils.getAddress(entry.minter),
          entry.maxCount,
          utils.parseEther(entry.price).toString(),
        ]
      )
    )
  } catch (e: any) {
    return null
  }
}

export async function makeTreeFromUrl(url: string) {
  const res = await fetch(url)
  const data = await res.text()
  const json = data.split(/\r?\n/).map((row) => {
    const [minter, price, maxCount] = row.split(',')
    return { minter, price, maxCount }
  })
  return makeTree(json)
}

export function makeTree(entries: EntryType[]) {
  entries = entries
    .map((entry: any) => {
      entry.hash = hashForEntry(entry)
      return entry
    })
    .filter((entry) => !!entry.hash)
  const tree = new MerkleTree(
    entries.map((entry: any) => entry.hash),
    keccak256,
    { sortPairs: true }
  )
  entries = entries.map((entry: any) => {
    entry.hash = utils.hexValue(entry.hash)
    entry.proof = tree.getHexProof(entry.hash)
    entry.price = utils.parseEther(entry.price)
    return entry
  })

  return {
    tree,
    root: tree.getHexRoot(),
    entries,
  }
}

