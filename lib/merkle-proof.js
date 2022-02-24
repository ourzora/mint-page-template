import { MerkleTree } from 'merkletreejs'
import { ethers } from 'ethers'
import keccak256 from 'keccak256'

const abiEncode = (index, address) => {
  const hashed = ethers.utils.defaultAbiCoder.encode(
    ['uint256', 'address'],
    [index, address]
  )
  return hashed
}

const hash = (index, address) => keccak256(abiEncode(index, address))

export const generateMerkleTree = (inputs) => {
  const leaves = inputs.map((address, index) => hash(index, address))
  return new MerkleTree(leaves, keccak256, { sortPairs: true })
}

export const getProof = (tree, index, address) =>
  index < 0 ? [] : tree.getHexProof(hash(index, address))
