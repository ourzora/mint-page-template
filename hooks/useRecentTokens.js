import { useState, useEffect } from 'react'

export const useRecentTokens = ({ start, end, reverse }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [tokens, setTokens] = useState({})
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const getTokens = async ({ start, end, reverse }) => {
    // react-query / cache this part?
    const tokens = await fetch(`${baseUrl}/api/metadata/sample/${start}...${end}`).then(
      (r) => r.json()
    )
    setTokens(reverse ? tokens.reverse() : tokens)
    setIsLoading(false)
  }

  useEffect(() => {
    getTokens({ start, end, reverse })
  }, [])

  return {
    isLoading,
    tokens,
  }
}
