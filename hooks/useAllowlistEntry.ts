import useSWR from 'swr'

export function useAllowlistEntry({
  merkleRoot,
  address,
}: {
  merkleRoot?: string
  address?: string
}) {
  const { data: entry, error } = useSWR(
    `https://allowlist.zora.co/allowed?user=${address}&root=${merkleRoot}`
  )

  return {
    loading: !error && !entry,
    accessAllowed: entry && !!entry.length && !!entry[0].proof.length,
    allowlistEntry: entry && entry[0],
  }
}
