import { style } from '@vanilla-extract/css'
import { atoms, media, vars } from '@zoralabs/zord'

export const mediaContainer = style([
  {
    borderRadius: 0,
    overflow: 'hidden',
    '@media': {
      [media.min480]: {
        maxWidth: '80%',
        maxHeight: '90vh',
        borderRadius: vars.radii.curved,
      },
    },
  },
])

export const mediaItem = style([
  atoms({ w: '100%', h: '100%' }),
])

