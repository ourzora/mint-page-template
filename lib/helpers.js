export const ipfsImage = (url) =>
  url.indexOf('ipfs://') > -1
    ? url.replace('ipfs://', process.env.NEXT_PUBLIC_IMAGE_HOST)
    : url

export const shortenHash = (hash) => {
  if (!hash) return hash

  const num = 8
  if (!hash.startsWith('0x')) hash = `0x${hash}`

  return (
    <span>
      {hash.slice(0, num)}
      &hellip;
      {hash.slice(-2 - num)}
    </span>
  )
}
