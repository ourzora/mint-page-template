import * as styles from './asset.css'
import { Flex } from '@zoralabs/zord'
import { DelayedCenteredSpinner } from 'components/DelayedCenteredSpinner'
import useToggle from 'hooks/useToggle'
import React, { useMemo, useRef } from 'react'

export interface VideoAssetProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  coverImage?: string
  compact?: boolean
}

export function VideoAsset({
  className,
  controls = true,
  compact,
  coverImage,
  src,
}: VideoAssetProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useToggle(false)

  const url = useMemo(() => encodeURI(src), [src])

  return (
    <Flex
      className={styles.minH}
      position="relative"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      {!ready && (
        <DelayedCenteredSpinner
          className={styles.minH}
          position="absolute"
          inset="x0"
          style={{
            zIndex: 11,
          }}
        />
      )}
      <video
        ref={videoRef}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%',
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          ...(!ready
            ? { filter: 'blur(5px) !important' }
            : { filter: 'blur(0) !important' }),
        }}
        onCanPlay={() => setReady(true)}
        className={className}
        preload="auto"
        src={url}
        loop
        playsInline={compact}
        controls={controls}
        poster={coverImage}
        muted
        autoPlay
      />
    </Flex>
  )
}
