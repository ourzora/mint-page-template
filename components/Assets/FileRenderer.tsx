import { Box, Flex } from '@zoralabs/zord'
import React from 'react'

export interface FileRendererProps {
  className?: string
  contentType: string
  source: string
  style?: React.CSSProperties
}

function FileRenderer({ className, source, style }: FileRendererProps) {
  return (
    <Box position="relative" w="100%" h="100%">
      <Flex
        className={className}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          userSelect: 'none',
          ...style,
        }}
        direction="column"
        justify="center"
      >
        <iframe
          src={source}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-scripts"
          style={{
            border: 0,
            objectPosition: '50% 50%',
            objectFit: 'fill',
            maxHeight: '100%',
            width: '100%',
            height: '100%',
            margin: '0 auto',
          }}
        />
      </Flex>
    </Box>
  )
}

export { FileRenderer }
