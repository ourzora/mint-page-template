import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { intervalToDuration } from 'date-fns'

export function isValidDate(date: Date) {
  return date instanceof Date && isFinite(date.getTime())
}
export function useCountdown(
  end: number,
  showSeconds: boolean,
  { onElapse }: { onElapse?: () => void }
): { countdownText: string | null; countdownTooLarge: boolean } {
  const date = useMemo(() => new Date(end), [end])
  const [cancelPending, setCancelPending] = useState<boolean>(false)
  const [now, setNow] = useState(new Date())

  const countdownTooLarge = useMemo(
    () => !isValidDate(date) || date.getTime() > now.getTime() + 31536000000,
    [date, now]
  )

  const tick = useCallback(() => {
    setNow(new Date())

    const nextTick = setTimeout(() => {
      if (!countdownTooLarge && !cancelPending) tick()
    }, 1000)

    return () => {
      setCancelPending(true)
      clearTimeout(nextTick)
    }
  }, [countdownTooLarge, cancelPending])

  useEffect(() => {
    if (!cancelPending) tick()
    return () => {
      setCancelPending(true)
    }
  }, [tick, cancelPending])

  useEffect(() => {
    if (!cancelPending && onElapse && Number(date) <= Number(now)) {
      onElapse()
    }
    return () => {
      setCancelPending(true)
    }
  }, [onElapse, date, now, cancelPending])

  const duration = countdownTooLarge
    ? null
    : intervalToDuration({
        start: now,
        end: date,
      })

  const countdownText = useMemo(
    () =>
      duration
        ? [
            duration.months ? duration.months + 'mo' : '',
            duration.days ? duration.days + 'd' : '',
            duration.hours + 'h',
            duration.minutes + 'm',
            !showSeconds && duration.days && duration.days > 0
              ? ''
              : duration.seconds + 's',
          ].join(' ')
        : null,
    [duration, showSeconds]
  )

  return { countdownText, countdownTooLarge }
}

export function CountdownTimer({
  targetTime,
  showSeconds = false,
  refresh = false,
  hideLargeCountdown = true,
  appendText = '',
  prependText = '',
}: {
  targetTime: number
  refresh?: boolean
  showSeconds?: boolean
  hideLargeCountdown?: boolean
  appendText?: string
  prependText?: string
}) {
  const { countdownText, countdownTooLarge } = useCountdown(targetTime, showSeconds, {
    onElapse: refresh ? () => location.reload() : undefined,
  })

  return (
    <>
      {!countdownTooLarge
        ? prependText + countdownText + appendText
        : hideLargeCountdown
        ? ''
        : prependText + '> 1 year' + appendText}
    </>
  )
}
