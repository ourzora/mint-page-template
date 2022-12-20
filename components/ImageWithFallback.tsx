import React, { DetailedHTMLProps, ImgHTMLAttributes, useMemo, useState } from 'react'
import useSWR from 'swr'
import { MediaType, mimeToMediaType } from 'models/mediaType'
import { getMimeType, isDataURI } from 'utils/asset'

interface Props
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  fallbackSrc?: string
  height?: '100%' | 'auto'
  objectFit?: React.CSSProperties['objectFit']
}

export function ImageWithFallback({
  alt,
  fallbackSrc,
  height = '100%',
  objectFit,
  src,
  ...props
}: Props) {
  const [imageError, setImageError] = useState(false)

  const { data: mimeType } = useSWR(
    src ? ['getMimeType', src] : null,
    (_, src) => {
      if (!src || typeof src !== 'string' || fallbackSrc) return
      return getMimeType(src)
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  const fallback = useMemo(() => {
    if (fallbackSrc) return fallbackSrc

    const mediaType = mimeType ? mimeToMediaType[mimeType] : MediaType.UNKNOWN

    if (mediaType === MediaType.IMAGE) return '/assets/image/fallback.svg'
    else if (
      [MediaType.AUDIO, MediaType.VIDEO, MediaType.HTML, MediaType.TEXT].includes(
        mediaType
      )
    )
      return `/assets/fallbacks/${mediaType.toLowerCase()}.svg`
    return '/assets/fallbacks/default.svg'
  }, [fallbackSrc, mimeType])

  let cleanSrc = src
  // Catch metadata renderer ?id=1 errors
  if (cleanSrc && isDataURI(cleanSrc)) {
    cleanSrc = cleanSrc.replace(/\?id=\d+$/, '')
  }

  return (
    <img
      src={!cleanSrc || imageError ? fallback : cleanSrc}
      alt={alt || ''}
      onError={() => setImageError(true)}
      style={{
        objectFit: objectFit || 'cover',
        width: '100%',
        height,
      }}
      {...props}
    />
  )
}

