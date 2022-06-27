import { useState } from 'react'
import { allowlist } from '@lib/allowlist'
import { getProof, generateMerkleTree } from '@lib/merkle-proof.js'

export const useAllowlist = () => {
  const [allowlistVerified, setAllowlistVerified] = useState(false)
  const [allowlistChecked, setAllowlistChecked] = useState(false)
  const [allowlistIndex, setAllowlistIndex] = useState<number | undefined>()
  const [allowlistProof, setAllowlistProof] = useState(false)

  const tree = generateMerkleTree(allowlist)
  const root = tree.getRoot().toString('hex')

  const checkAllowlist = (address: string) => {
    const index = allowlist.indexOf(address)
    const proof = getProof(tree, index, address)
    setAllowlistProof(proof)
    setAllowlistIndex(index)
    setAllowlistVerified(!!proof.length)
    setAllowlistChecked(true)
  }

  return [
    {
      allowlistRoot: root,
      allowlistIndex,
      allowlistProof,
      allowlistChecked,
      allowlistVerified,
    },
    checkAllowlist,
  ]
}
