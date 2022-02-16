import { styled } from 'stitches.config'
import { Box } from '@components/primitives'

export const ButtonSet = ({ css, children, ...props }) => {
  return (
    <Box
      css={{
        display: 'grid',
        gridAutoColumns: 'max-content',
        gridAutoFlow: 'column',
        gap: '$margin',
        justifyContent: 'center',
        width: '100%',
        ...css,
      }}
    >
      {children}
    </Box>
  )
}

export const Button = ({ css, children, ...props }) => {
  return (
    <BaseButton
      {...props}
      css={{
        ...css,
      }}
    >
      <span>{children}</span>
    </BaseButton>
  )
}

const BaseButton = styled('button', {
  background: '$primary',
  color: '$background',
  cursor: 'pointer',
  padding: '0.5rem 2rem',
  borderRadius: '4px',
  margin: 0,
  '@media(hover:hover)': {
    '&:hover': {
      color: '$primary',
      background: '$primary50',
    },
  },
  variants: {
    link: {
      true: {
        padding: 0,
        color: '$primary',
        background: 'transparent',
        textDecoration: 'underline',
        '@media(hover:hover)': {
          '&:hover': {
            color: '$primary',
            background: 'transparent',
            textDecoration: 'none',
          },
        },
      },
    },
  },
})
