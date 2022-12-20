import { Box } from '@zoralabs/zord'
import React from 'react'

export interface ImageRendererProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  quality?: number
  width?: number | string
}

export const ImageAsset = ({ src, ...props }: ImageRendererProps) => {
  const url = src ? (src.startsWith('https://') ? encodeURI(src) : src) : ''
  return (
    <Box w="100%" h="100%">
      <img
        {...props}
        key={src}
        alt={props.alt}
        src={url}
        width={props.width}
        height="inherit"
        loading="lazy"
      />
    </Box>
  )
}
