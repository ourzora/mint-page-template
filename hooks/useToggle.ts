import { useCallback, useRef, useState } from 'react'

function useToggle(
  initialValue: boolean = false
): [boolean, (value?: boolean | any) => void] {
  const [value, internalSetValue] = useState(initialValue)
  const setValue = useCallback(
    (newValue?: boolean | any) => {
      if (typeof newValue !== 'boolean') {
        newValue = !value
      }
      internalSetValue(newValue)
    },
    [value, internalSetValue]
  )
  return [value, setValue]
}

export function useToggleOnce(
  initial: boolean = false
): [boolean, (value?: boolean | any) => void] {
  const [on, toggle] = useToggle(initial)
  const hasRun = useRef(false)
  const callback = useCallback(() => {
    if (hasRun.current) return
    hasRun.current = true
    toggle()
  }, [toggle])
  return [on, callback]
}

export default useToggle
