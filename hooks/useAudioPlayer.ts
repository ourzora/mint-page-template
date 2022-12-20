import { Howl } from 'howler'
import { useCallback } from 'react'
import { LoadProps, useAudioStore } from 'stores/audioStore'
import { useToggleOnce } from './useToggle'

type AudioPlayer = {
  togglePlayPause: () => void
  isActive: boolean
  isLoading: boolean
  isPlaying: boolean
  error: Error | undefined
  duration: number
  player: Howl | null
  setIsInView: (isInView: boolean) => void
  setPersisting: (persist: boolean) => void
}

// To manage multiple players these props used when player is not active
const idleProps = {
  duration: 0,
  isLoading: false,
  isPlaying: false,
  player: null,
}

export function useAudioPlayer({ collection, id, image, src }: LoadProps): AudioPlayer {
  const [init, setInit] = useToggleOnce()
  const {
    id: currentId,
    load,
    isPlaying,
    duration,
    setIsInView,
    togglePlayPause,
    setPersisting,
  } = useAudioStore()

  const isLoading = init && duration === 0
  const isActive = !!id && currentId === id

  const toggle = useCallback(() => {
    if (init) {
      togglePlayPause()
    } else {
      load({ collection, id, image, src })
      setInit()
    }
  }, [collection, id, image, init, load, setInit, src, togglePlayPause])

  return {
    togglePlayPause: toggle,
    isActive,
    isLoading,
    isPlaying,
    error: undefined,
    duration: 0,
    player: null,
    setIsInView,
    setPersisting,
    ...(!isActive && { ...idleProps }),
  }
}
