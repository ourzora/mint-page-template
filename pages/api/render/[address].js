import { baseUrl } from '@lib/constants'
import fetch from 'node-fetch'

const RENDER_HOST =
  'https://aged-violet-9166.fly.dev'

export default async function handler(req, res) {
  const { address } = req.query

  const artUrl = baseUrl
    ? `${baseUrl}/art/${address}`
    : `https://zoratopia-nyc-project-ourzora.vercel.app/art/${address}`

  const art = encodeURIComponent(artUrl)

  const upstream = `${RENDER_HOST}?url=${art}`

  const resp = await fetch(upstream)

  res.setHeader('content-type', resp.headers.get('content-type'))
  res.setHeader('cache-control', 'public, s-maxage=60, stale-while-revalidate=300')

  const body = await resp.arrayBuffer()

  res.send(Buffer.from(body))
  res.end()
}