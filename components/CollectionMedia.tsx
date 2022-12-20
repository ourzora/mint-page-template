import { Flex, FlexProps, SpinnerOG } from '@zoralabs/zord'
import { AssetRenderer, AssetRendererProps } from 'components/Assets/AssetRenderer'
import { MediaType, mimeToMediaType } from 'models/mediaType'
import React, { useEffect, useState } from 'react'
import { getMimeType } from 'utils/asset'
import { transformIPFSURL } from 'providers/IPFSProvider'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'

interface CollectionMediaProps extends FlexProps {
  collection?: ERC721DropProviderState
  metadata: any
  objectFit?: 'cover' | 'contain'
}

export function CollectionMedia({
  collection,
  metadata,
  objectFit = 'contain',
  ...props
}: CollectionMediaProps) {
  const [isAudio, setIsAudio] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [assetRendererProps, setAssetRendererProps] = useState<AssetRendererProps>({
    src: '',
    coverImageUrl: '',
    mediaType: MediaType.UNKNOWN,
  })

  useEffect(() => {
    let mounted = true

    ;(async () => {
      // TODO: Review & refactor this
      if (!metadata || metadata.loading) {
        return
      }

      const image = metadata?.imageURI || metadata?.image
      const media = metadata.animation_url || metadata.animationURI
      const url = transformIPFSURL(media || image)
      if (!url) return

      const coverUrl = transformIPFSURL(image)
      const mimeType = await getMimeType(url)
      const mediaType = mimeType ? mimeToMediaType[mimeType] : MediaType.UNKNOWN
      const isAudio = mediaType === MediaType.AUDIO
      setIsAudio(isAudio)

      if (mounted) {
        setLoading(false)
        setAssetRendererProps({
          src: url,
          coverImageUrl: coverUrl,
          mediaType,
        })
      }
    })()

    return () => {
      mounted = false
    }
  }, [metadata])

  return (
    <Flex
      align="center"
      justify="center"
      backgroundColor="background2"
      data-test="asset-container"
      overflow="hidden"
      h="100%"
      w="100%"
      py="x0"
      {...props}
    >
      {loading ? (
        <SpinnerOG />
      ) : (
        <AssetRenderer
          collection={collection}
          image={{
            style: {
              width: '100%',
              height: '100%',
              objectFit,
            },
          }}
          {...assetRendererProps}
        />
      )}
    </Flex>
  )
}

