import { style, keyframes } from '@vanilla-extract/css'

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
      color: '#F5A623',
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
  border: '1px solid #808080',
  borderRadius: 0,
})

export const header = style({
  borderBottom: '1px solid #f3f3f3',
})

export const heroImage = style({
  objectFit: 'contain',
  height: '100%',
  width: '100%',
  maxHeight: '80vh',
})
