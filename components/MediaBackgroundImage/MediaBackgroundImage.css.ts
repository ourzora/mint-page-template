import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'

export const backgroundImage = style([
  {
    filter: 'blur(20px)',
    // @NOTE: This fixes blurry edges on image
    transform: 'scale(1.1)',
  },
  atoms({
    pos: 'absolute',
    inset: 'x0',
  }),
])

export const backgroundCover = style([
  {
    background: 'rgba(14, 14, 14, 0.4)',
  },
])
