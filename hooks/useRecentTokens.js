import { useState, useEffect } from 'react'

export const useRecentTokens = (count) => {
  const [isLoading, setIsLoading] = useState(true)
  const [tokens, setTokens] = useState({})
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const getTokens = async ({ length, count, reverse }) => {
    // Fake tokens
    // react-query / cache this part?
    let start = length - count + 1
    if (start < 1) start = 1
    const tokenIds = Array.from({ length: length - start + 1 }, (_, i) => i + start)
    const tokens = await Promise.all(
      tokenIds.map((token) =>
        fetch(`${baseUrl}/api/metadata/sample/${token}.json`).then((r) => r.json())
      )
    )
    setTokens(reverse ? tokens.reverse() : tokens)
    setIsLoading(false)
  }

  useEffect(() => {
    getTokens(count)
  }, [])

  return {
    isLoading,
    tokens,
  }
}
