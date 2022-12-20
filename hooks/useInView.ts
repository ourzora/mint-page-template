import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

/**
 * Basic intersection observer implementation
 * @param threshold - The threshold of the intersection observer
 * @param rootMargin - The rootMargin of the intersection observer
 * @returns [ref, isInView]
 * @example with options:
    const [ref, isInView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -100px 0px' })
    return <div ref={ref}>Hello</div>
 */

type UseInView = [MutableRefObject<HTMLDivElement | null>, boolean]

interface UseInViewProps {
  threshold?: number | undefined
  rootMargin?: string | undefined
}

const defaultOptions: UseInViewProps = {
  threshold: 1,
  rootMargin: '0px',
}

export function useInView({
  threshold,
  rootMargin,
}: UseInViewProps = defaultOptions): UseInView {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  const observe = useCallback(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        const inView = e.isIntersecting
        setIsInView(inView)
      },
      { threshold, rootMargin }
    )

    if (ref?.current) io.observe(ref?.current)

    return () => io.disconnect()
  }, [threshold, rootMargin])

  useEffect(() => {
    const disconnect = observe()

    return () => {
      if (disconnect) disconnect()
    }
  }, [observe])

  return [ref, isInView]
}
