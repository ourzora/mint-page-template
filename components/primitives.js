import { styled } from '../stitches.config'

export const Box = styled('div', {
  dl: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    columnGap: '2rem',
  },
  'dt, dd': { margin: 0, padding: 0 },
})

export const Flex = styled(Box, {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  '> *': {
    flex: 1,
  },
})

export const HR = styled('hr')

export const Span = styled('span')

export const Text = styled('p', {
  marginBottom: '1.4em',
  maxWidth: '50em',
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
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    error: {
      true: {
        color: '$red',
      },
    },
  },
})

const BaseFigure = styled('figure')

export const Figure = ({ src, alt, caption, css, image, ...props }) => {
  return (
    <BaseFigure
      {...props}
      css={{
        ...css,
        margin: 0,
        img: {
          display: 'block',
          width: '100%',
        },
        figcaption: {
          fontSize: '$caption',
          marginTop: '0.5rem',
          textAlign: 'center',
        },
      }}
    >
      {image || <img src={src} alt={alt} />}
      {caption && <figcaption>{caption}</figcaption>}
    </BaseFigure>
  )
}
