import { styled } from '../stitches.config'

export const TokenGrid = styled('div', {
  backgroundColor: '$white',
  minHeight: '100vh',
  columnGap: '$dmargin',
  borderBottom: '1px dashed $background',
  display: 'grid',
  gridTemplateColumns: '500px 1fr',
  '@lg': {
    gridTemplateColumns: '2fr 3fr',
  },
  '@sm': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  '&:last-of-type': {
    borderBottom: 0,
  },

  figure: {
    background: '$primary5',
    display: 'flex',
    maxHeight: '100%',
    padding: '2rem',
    width: '100%',
    minHeight: '100vh',
    img: {
      objectFit: 'contain',
      margin: 'auto',
      maxHeight: 'calc(100vh - 10rem)',
      maxWidth: '90%',
      width: 'auto',
    },
  },
})
