import { styled } from 'stitches.config'
import { Box } from '@components/primitives'

export const HomeGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  gap: '60px',
  padding: '40px',
  '@sm': {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
})
