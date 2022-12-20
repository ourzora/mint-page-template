import React, { useCallback, useMemo } from 'react'
import { useAudioPosition } from 'react-use-audio-player'
import * as styles from './ProgressBar.css'
import * as Slider from '@radix-ui/react-slider'
import { AudioTimeLabels } from './AudioTimeLabels'

type ProgressBarProps = {
  compact?: boolean
  togglePlayPause: () => void
  playing: boolean
}

export function ProgressBar({ compact, togglePlayPause, playing }: ProgressBarProps) {
  const { percentComplete, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  })

  const currentTime = useMemo(
    () => duration * (percentComplete / 100),
    [duration, percentComplete]
  )

  const handleClick = useCallback(() => {
    if (!playing) togglePlayPause()
  }, [playing, togglePlayPause])

  const handleChange = useCallback(
    (value: number[]) => {
      if (!!seek) seek(value[0])
    },
    [seek]
  )

  return (
    <>
      <Slider.Root
        className={styles.root}
        defaultValue={[0]}
        min={0}
        max={duration}
        value={[currentTime]}
        onValueChange={handleChange}
        onClick={handleClick}
      >
        <Slider.Track className={styles.track}>
          <Slider.Range className={styles.range} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb} />
      </Slider.Root>

      {!compact && <AudioTimeLabels currentTime={currentTime} totalTime={duration} />}
    </>
  )
}
