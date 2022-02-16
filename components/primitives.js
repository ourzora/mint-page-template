import { styled } from '../stitches.config'

export const Box = styled('div', {})

export const HR = styled('hr')

export const Span = styled('span')

export const Text = styled('p', {
  marginBottom: '1.4em',
  a: {
    textUnderlineOffset: '0.1em',
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  variants: {
    center: {
      true: {
        textAlign: 'center',
      },
    },
  },
})
