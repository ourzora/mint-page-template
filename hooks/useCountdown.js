import { useEffect, useState, useMemo, useCallback } from 'react'
import { intervalToDuration } from 'date-fns'

export const useCountdown = (dateStr) => {
  if (!dateStr) return { countdownText: false }
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  const date = useMemo(() => new Date(dateStr), [dateStr])
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  })

  const plural = useCallback((num, label) => {
    return `${num} ${label}${num === 1 ? '' : 's'}`
  }, [])

  const countdownText = useMemo(() => {
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: now,
      end: date,
    })

    return [days + 'd', hours + 'hr', minutes + 'm', seconds + 's'].join(' ')
  }, [date, now, plural])

  return { countdownText: ready ? countdownText : '...' }
}
