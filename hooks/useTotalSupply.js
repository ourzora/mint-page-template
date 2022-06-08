import { useEffect, useState } from 'react'
import { getContractData } from '@lib/helpers'

export const useTotalSupply = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState()

  const asyncFunc = async () => {
    const data = await getContractData('totalSupply')
    if (data.error) setError(data.error)
    else setData(data)
    setLoading(false)
  }

  useEffect(() => {
    asyncFunc()
  }, [])

  return [
    {
      totalSupply: !error && data?.totalSupply,
      contractError: error,
      contractLoading: loading,
    },
    asyncFunc,
  ]
}
