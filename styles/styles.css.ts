import { style, keyframes } from '@vanilla-extract/css'
import { vars, atoms, ease } from '@zoralabs/zord'

export const MAXWIDTH = 700
const maxWidthQuery = `(max-width: ${MAXWIDTH}px)`

const waiting = keyframes({
  '0%': { opacity: 1 },
  '30%': { opacity: 0.2 },
  '60%': { opacity: 1 },
})

export const waitingApproval = style({
  opacity: '1 !important',
  selectors: {
    '&:after': {
      content: '•',
      fontSize: '20px',
      color: vars.color.foreground.warning,
      animation: `1s ${waiting} infinite ease-in-out`,
    },
  },
})

export const hideMobile = style({
  '@media': {
    '(max-width: 500px)': {
      display: 'none',
    },
  },
})

export const menuItem = style([
  {
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    gap: 0,
  },
  atoms({
    px: 'x6',
    py: 'x3',
  }),
])


export const mintCounterInput = style([
  {
    width: '3em',
    minWidth: 0,
    outline: 0,
    selectors: {
      '&:focus': {
        borderColor: vars.color.foreground.secondary,
      },
      '&:hover:not(:focus)': {
        borderColor: vars.color.foreground.tertiary,
      },
    },
  },
  atoms({
    color: 'primary',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 'small',
    borderWidth: 'normal',
    borderStyle: 'solid',
    textAlign: 'center',
    height: 'x11',
  }),
])

export const priceDateHeading = style({
  fontWeight: 600,
  fontSize: '38px',
  lineHeight: '42px',
  letterSpacing: '0.01em',
})

export const maxWidth = style({
  margin: '0 auto',
  width: MAXWIDTH,
  '@media': {
    [maxWidthQuery]: {
      maxWidth: MAXWIDTH,
      width: 'auto',
    },
  },
})

export const border = style({
  border: `1px solid ${vars.color.foreground.border}`,
  borderRadius: 0,
})

export const header = style({
  borderBottom: `1px solid ${vars.color.foreground.border}`,
})

export const heroImage = style({
  objectFit: 'contain',
  height: '100%',
  width: '100%',
  maxHeight: '80vh',
})

const collapsibleOpen = keyframes({
  '0%': { height: 0 },
  '100%': { height: 'var(--radix-collapsible-content-height)' },
})

const collapsibleClose = keyframes({
  '0%': { height: 'var(--radix-collapsible-content-height)' },
  '100%': { height: 0 },
})

export const collapsibleContent = style({
  overflow: 'hidden',
  selectors: {
    '&[data-state="open"]': { animation: `${collapsibleOpen} 260ms ${ease.in}` },
    '&[data-state="closed"]': { animation: `${collapsibleClose} 260ms ${ease.out}` },
  },
})
