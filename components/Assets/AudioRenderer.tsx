import { Box, Flex } from '@zoralabs/zord'
import React, { CSSProperties } from 'react'
import { audioGrid } from 'styles/styles.css'
import { ImageWithFallback } from 'components/ImageWithFallback'
import { DelayedCenteredSpinner } from 'components/DelayedCenteredSpinner'
import { AudioPlayer } from './AudioPlayer'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { useIsMounted } from 'hooks/useIsMounted'

export interface AudioRendererProps {
  style?: CSSProperties
  className?: string
  src: string
  coverImageUrl?: string
  playable?: boolean
  inverted?: boolean
  compact?: boolean
}

export function AudioRenderer({
  style,
  className,
  coverImageUrl,
  src,
  inverted,
  compact,
}: AudioRendererProps) {
  const isMounted = useIsMounted()

  const waveformDisplay = (
      isMounted && src && (
        <AudioPlayerProvider>
          <AudioPlayer src={src} inverted={inverted} compact={compact} />
        </AudioPlayerProvider>
      )
  )

  if (compact) {
    return (
      <Flex align="center" justify="center" h="100%" w="100%">
        <Flex align="center" justify="center" w="100%" h="100%">
          <Box
            w="100%"
            style={{
              boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 10px',
            }}
          >
            <Box
              position="relative"
              w="100%"
              h="100%"
              className={className}
              style={style}
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                gap="x4"
                w="100%"
                h="100%"
                position="relative"
                cursor="pointer"
              >
                <Box position="absolute" top="x0" left="x0" w="100%" h="100%">
                  <ImageWithFallback
                    alt="Cover image"
                    src={coverImageUrl}
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      position: 'absolute',
                      objectFit: 'contain',
                      objectPosition: '50% 50%',
                      top: 0,
                      height: '100%',
                      width: '100%',
                    }}
                    fallbackSrc="/assets/fallbacks/audio.svg"
                  />
                </Box>

                <Flex w="100%" h="100%" p="x6" align="flex-end">
                  {waveformDisplay}
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex className={audioGrid} align="center" justify="center" h="100%" w="100%">
      <Box
        w="100%"
        m="auto"
      >
        <ImageWithFallback
          alt="Cover image"
          src={coverImageUrl}
          style={{
            display: 'block',
            height: '100%',
            objectFit: 'contain',
            objectPosition: '50% 50%',
            width: '100%',
          }}
          fallbackSrc="/assets/fallbacks/audio.svg"
        />
      </Box>

      <Flex align="center" justify="center" w="100%" h="100%">
        <Box
          w="100%"
          p="x6"
          style={{
            boxShadow: 'rgb(0 0 0 / 5%) 0px 5px 10px',
          }}
        >
          <Box className={className} position="relative" w="100%" h="100%" style={style}>
            {!!src ? (
              <Flex
                data-audio-src={src}
                direction="column"
                align="center"
                justify="center"
                gap="x4"
                w="100%"
                h="100%"
                position="relative"
                cursor="pointer"
              >
                {waveformDisplay}
              </Flex>
            ) : (
              <DelayedCenteredSpinner />
            )}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}
