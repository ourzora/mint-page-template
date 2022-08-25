import { useState, useEffect } from 'react'

export function useAllowlistEntry({
  merkleRoot,
  address,
}: {
  merkleRoot?: string
  address?: string
}) {
  const [accessAllowed, setAccessAllowed] = useState<boolean>()
  const [allowlistEntry, setAllowlistEntry] = useState<any>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function asyncFunc() {
      if (!address || !merkleRoot) return
      const url = `https://allowlist.zora.co/allowed?user=${address}&root=${merkleRoot}`
      const req = await fetch(url)
      const entry = await req.json()
      setAccessAllowed(!!entry.length && !!entry[0].proof.length)
      setAllowlistEntry(entry[0])
      setLoading(false)
    }
    asyncFunc()
  }, [address, merkleRoot])

  return {
    loading,
    accessAllowed,
    allowlistEntry,
  }
}
