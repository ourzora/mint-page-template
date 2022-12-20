import filetype from 'magic-bytes.js'
import parseDataUrl from 'parse-data-url'

export function isDataURI(url?: string | null) {
  return url && typeof url === 'string' && url.startsWith('data:')
}

export async function getMimeType(uri: string) {
  if (isDataURI(uri)) {
    // Strip mimetype from data-uri string
    const parsedDataUrl = parseDataUrl(uri)
    if (parsedDataUrl) {
      return parsedDataUrl.contentType
    }
  }

  const res = await fetch(uri, { method: 'HEAD' })
  let mimeType = res.headers.get('content-type')
  if (!mimeType) {
    // Fetch full image and try parse it using magic-bytes
    const res = await fetch(uri)
    const buffer = await res.arrayBuffer()
    mimeType = filetype([...new Uint8Array(buffer)]).map((ft) => ft.mime)[0] || null
  }
  return mimeType
}

