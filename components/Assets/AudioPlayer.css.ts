import { style } from '@vanilla-extract/css'
import { atoms, vars } from '@zoralabs/zord'
import { BASE_LAYER } from 'constants/layers'

export const container = style({ zIndex: BASE_LAYER })

export const button = style([
  {
    boxShadow: '0px 0px 14px 2px rgba(255, 255, 255, 0.8)',
    padding: vars.space.x8,
  },
  atoms({
    height: 'auto',
    minWidth: 'x0',
    borderRadius: 'round',
  }),
])

export const buttonCompact = style([
  {
    padding: vars.space.x4,
  },
])

export const icon = style([
  {
    filter: 'invert(1)',
  },
])

export const iconInverted = style([
  {
    filter: 'unset',
  },
])
