import { useState, useEffect } from 'react'

export const useRecentTokens = ({ url, start, end, reverse }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [tokens, setTokens] = useState({})

  const getTokens = async ({ url, start, end, reverse }) => {
    // react-query / cache this part?
    const tokens = await fetch(`${url}${start}...${end}`).then((r) => r.json())
    setTokens(reverse ? tokens.reverse() : tokens)
    setIsLoading(false)
  }

  useEffect(() => {
    getTokens({ url, start, end, reverse })
  }, [])

  const update = ({ start, end }) => getTokens({ url, start, end, reverse })

  return [
    {
      isLoading,
      tokens,
    },
    update,
  ]
}
