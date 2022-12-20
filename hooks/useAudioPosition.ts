import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Howl } from 'howler'
import { useAudioStore } from 'stores/audioStore'
import { get } from 'lodash'

interface AudioPosition {
  position: number
  duration: number
  bufferPercent: number
  isPlaying: boolean
  percentComplete: number
  seek?: (position: number) => number
  togglePlayPause: () => void
}

// To manage multiple players these props used when player is not active
const idleProps = {
  bufferPercent: 0,
  position: 0,
  duration: 0,
  percentComplete: 0,
}

// gives current audio position state - updates in an animation frame loop for animating audio visualizations
export const useAudioPosition = (id: string): AudioPosition => {
  const {
    id: currentId,
    player,
    isPlaying,
    isStopped,
    duration,
    togglePlayPause,
  } = useAudioStore()
  const isActive = !!id && currentId === id

  const [position, setPosition] = useState(0)
  const [bufferPercent, setBufferPercent] = useState(0)
  const animationFrameRef = useRef<number>()
  const nodeRef = useRef<HTMLAudioElement>()

  const percentComplete = useMemo(() => {
    return (position / duration) * 100 || 0
  }, [duration, position])

  const seek = useCallback(
    (position: number) => {
      if (!player) return 0

      // it appears that howler returns the Howl object when seek is given a position
      // to get the latest potion you must call seek again with no parameters
      const result = player.seek(position) as unknown as Howl
      const updatedPos = result.seek() as number
      setPosition(updatedPos)
      return updatedPos
    },
    [player, setPosition]
  )

  const handleLoad = useCallback(() => {
    const node = nodeRef.current
    if (!!node) {
      // https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/buffering_seeking_time_ranges#Creating_our_own_Buffering_Feedback
      for (let i = 0; i < node.buffered.length; i++) {
        if (node.buffered.start(node.buffered.length - 1 - i) < node.currentTime) {
          const bufferProgress =
            (node.buffered.end(node.buffered.length - 1 - i) / duration) * 100
          setBufferPercent(bufferProgress)
          break
        }
      }
    }
  }, [duration])

  useEffect(() => {
    const sound = get(player, '_sounds[0]')
    nodeRef.current = sound?._node
    if (!!nodeRef.current && duration > 0)
      nodeRef.current.addEventListener('progress', handleLoad, false)

    return () => {
      if (!!nodeRef.current) nodeRef.current.removeEventListener('progress', handleLoad)
    }
  }, [handleLoad, player, duration])

  // sets position on player initialization and when the audio is stopped
  useEffect(() => {
    if (player) {
      setPosition(player.seek() as number)
    }
  }, [player, setPosition, isStopped])

  // updates position on a 60fps loop for high refresh rate setting
  useEffect(() => {
    const animate = () => {
      setPosition(player?.seek() as number)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // kick off a new animation cycle when the player is defined and starts playing
    if (player && isPlaying) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [player, isPlaying, setPosition])

  return {
    isPlaying,
    bufferPercent,
    position,
    duration,
    seek,
    percentComplete,
    togglePlayPause,
    ...(!isActive && { ...idleProps }),
  }
}
