import { AudioRenderer, AudioRendererProps } from './AudioRenderer'
import { FileRenderer, FileRendererProps } from './FileRenderer'
import { ImageAsset, ImageRendererProps } from './ImageAsset'
import { VideoAsset, VideoAssetProps } from './VideoAsset'
import { lowerCase, omit } from 'lodash'
import { MediaType } from 'models/mediaType'
import React, { useMemo } from 'react'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'

export interface AssetRendererProps {
  alt?: string
  audio?: Partial<AudioRendererProps>
  className?: string
  coverImageUrl?: string
  controls?: boolean
  compact?: boolean
  collection?: ERC721DropProviderState
  image?: Partial<ImageRendererProps>
  mediaType: MediaType
  onClick?: React.MouseEventHandler
  overrides?: {
    [key in MediaType]?: (p: any) => any
  }
  src: string
  style?: any
  unknown?: Partial<FileRendererProps>
  video?: Partial<VideoAssetProps>
}

export const UnknownAsset = ({ src, ...props }: AssetRendererProps) => {
  const url = encodeURI(src)
  return <FileRenderer source={url} contentType={props.mediaType} {...props} />
}

function AssetRenderer({ mediaType = MediaType.UNKNOWN, ...props }: AssetRendererProps) {
  const lookup = useMemo(
    () => ({
      [MediaType.IMAGE]: ImageAsset,
      [MediaType.VIDEO]: VideoAsset,
      [MediaType.AUDIO]: AudioRenderer,
      [MediaType.UNKNOWN]: UnknownAsset,
      ...props.overrides,
    }),
    [props.overrides]
  )

  const Component = useMemo(() => lookup[mediaType] || UnknownAsset, [lookup, mediaType])

  const accessor = useMemo(
    () => lowerCase(mediaType) as 'image' | 'video' | 'audio' | 'unknown',
    [mediaType]
  )

  // Remove props that are not valid for the component type
  const filteredProps = useMemo(() => {
    return mediaType == MediaType.IMAGE
      ? omit(props, ['coverImageUrl', 'image', 'compact', 'collection'])
      : props
  }, [mediaType, props])

  const compProps = useMemo(() => props?.[accessor], [accessor, props])
  return (
    <Component {...filteredProps} {...compProps} />
  )
}

export { AssetRenderer }
