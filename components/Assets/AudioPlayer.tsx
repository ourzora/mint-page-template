import { Button, Paragraph, Stack } from '@zoralabs/zord'
import { OldIcon, OldIconType } from 'components/OldIcon'
import React, { useCallback, useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import { ProgressBar } from './ProgressBar'
import * as styles from './AudioPlayer.css'

// @TODO: show buffering state
const SHOW_BUFFER = false

type AudioPlayerProps = {
  src: string
  inverted?: boolean
  compact?: boolean
  hideProgress?: boolean
}

export function AudioPlayer({ inverted, compact, hideProgress, src }: AudioPlayerProps) {
  const { togglePlayPause, playing, error, duration, player } = useAudioPlayer({
    src: src,
    autoplay: false,
    html5: true,
    pool: 1,
    loop: true,
    //volume: 0,
  })

  const handleLoad = useCallback(() => {
    const node: HTMLAudioElement = player?._sounds[0]?._node

    if (!!node && duration > 0) {
      node.addEventListener('progress', () => {
        // https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/buffering_seeking_time_ranges#Creating_our_own_Buffering_Feedback
        for (let i = 0; i < node.buffered.length; i++) {
          if (node.buffered.start(node.buffered.length - 1 - i) < node.currentTime) {
            const bufferProgress =
              (node.buffered.end(node.buffered.length - 1 - i) / duration) * 100
            console.log('bufferProgress: ', bufferProgress)
            break
          }
        }
      })
    }
  }, [player, duration])

  useEffect(() => {
    if (SHOW_BUFFER && player && duration > 0) handleLoad()
  }, [handleLoad, player, duration])

  if (error)
    return (
      <Paragraph color="negative" size="sm">
        {error?.message ?? 'Player error'}
      </Paragraph>
    )

  return (
    <Stack className={styles.container} w="100%" align="center" gap="x5">
      {!hideProgress && (
        <ProgressBar
          compact={compact}
          togglePlayPause={togglePlayPause}
          playing={playing}
        />
      )}

      <Button
        className={[styles.button, compact && styles.buttonCompact]}
        variant={inverted ? 'secondary' : 'primary'}
        onClick={togglePlayPause}
      >
        <OldIcon
          className={inverted ? styles.iconInverted : styles.icon}
          size={compact ? 18 : 36}
          icon={playing ? OldIconType.PAUSE : OldIconType.TRIANGLE_RIGHT}
        />
      </Button>
    </Stack>
  )
}
