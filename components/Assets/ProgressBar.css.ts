import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'

export const progress = style([
  {
    transform: 'translateY(-3px)',
  },
  atoms({ w: '100%', pos: 'relative' }),
])

export const root = style([
  {
    touchAction: 'none',
  },
  atoms({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    w: '100%',
  }),
])

export const track = style([
  atoms({
    position: 'relative',
    flex: 1,
    borderRadius: 'round',
    height: 'x3',
    backgroundColor: 'text4',
    overflow: 'hidden'
  }),
])

export const range = style([
  atoms({
    position: 'absolute',
    backgroundColor: 'text3',
    h: '100%',
  }),
])

export const thumb = style([
  {
    opacity: 0,
    boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
    selectors: {
      '&:focus': {
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  atoms({
    display: 'block',
    w: 'x3',
    h: 'x3',
    backgroundColor: 'background1',
    borderRadius: 'round',
  }),
])
