import { useState } from 'react'
import { allowlist } from '@lib/allowlist'
import { getProof, verifyProof, generateMerkleTree } from '@lib/merkle-proof.js'

export const useAllowlist = () => {
  const [allowlistVerified, setAllowlistVerified] = useState(false)
  const [allowlistChecked, setAllowlistChecked] = useState(false)

  const checkAllowlist = (address) => {
    const tree = generateMerkleTree(allowlist)
    const root = tree.getRoot().toString('hex')
    const proof = getProof(tree, address)
    const verify = verifyProof(tree, proof, address, root)
    setAllowlistVerified(verify)
    setAllowlistChecked(true)
  }

  return [
    {
      allowlistChecked,
      allowlistVerified,
    },
    checkAllowlist,
  ]
}
