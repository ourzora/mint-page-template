import { useState, useCallback } from 'react'
import { Button } from './button'
import { Box, Figure } from './primitives'
import { motion, AnimatePresence } from 'framer-motion'
import { ipfsImage } from '@lib/helpers'
import PreventOutsideScroll from 'react-prevent-outside-scroll'

const MotionBox = motion(Box)

const TokenInfo = ({ index, tokens }) => {
  if (index === null) return null
  return (
    <Box
      css={{
        position: 'absolute',
        top: '6rem',
        left: '0',
        padding: '4rem',
        paddingTop: '0',
        textAlign: 'left',
        zIndex: 3,
      }}
    >
      <Box css={{ marginBottom: 0 }}>
        <dl>
          <dt>SET:</dt>
          <dd>{tokens[index].attributes[0].value}</dd>
          <dt>FORMAT: </dt>
          <dd>{tokens[index].attributes[1].value}</dd>
          <dt>NUMBER: </dt>
          <dd>{tokens[index].attributes[2].value}</dd>
          <dt>GRADE: </dt>
          <dd>{tokens[index].attributes[3].value.toUpperCase()}</dd>
        </dl>
      </Box>
    </Box>
  )
}

export const Gallery = ({ css, preview, tokens, ...props }) => {
  const [lightbox, setLightbox] = useState(null)
  const [showInfo, setShowInfo] = useState(false)

  const next = useCallback(
    (e) => {
      e.stopPropagation()
      e.preventDefault()
      const nextImage = lightbox + 1
      setLightbox(nextImage >= tokens.length ? 0 : nextImage)
    },
    [lightbox]
  )

  const prev = useCallback(
    (e) => {
      e.stopPropagation()
      e.preventDefault()
      const prevImage = lightbox - 1
      setLightbox(prevImage >= 0 ? prevImage : tokens.length - 1)
    },
    [lightbox]
  )

  const lightboxEl = lightbox !== null && lightbox > -1 && (
    <PreventOutsideScroll>
      <MotionBox
        transition={{ duration: 0.4 }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        css={{
          color: '$background',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 50,
          display: 'flex',
          backdropFilter: 'blur(20px)',
          figure: {
            margin: 'auto',
            position: 'relative',
            zIndex: 2,
            figcaption: {
              textAlign: 'left',
              marginTop: '1rem',
              fontSize: '$body',
            },
          },
          img: {
            width: 'auto',
            height: 'auto',
            maxHeight: 'calc(100vh - 4rem)',
            maxWidth: 'calc(100vw - 20rem)',
            objectFit: 'contain',
            '@sm': {
              maxWidth: 'calc(100vw - 11rem)',
            },
          },
          '.wrapper': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '$primary',
            opacity: 0.5,
          },
          '.close': {
            fontSize: '4rem',
            cursor: 'pointer',
            lineHeight: '1',
            fontWeight: '300',
            zIndex: 4,
          },
          '.nav': {
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '4rem',
            fontWeight: '300',
            zIndex: 4,
            span: {
              display: 'block',
            },
            '&.prev': {
              left: '$margin',
              '@sm': {
                left: '-2rem',
                paddingLeft: '3rem',
              },
            },
            '&.next': {
              right: '$margin',
              '@sm': {
                right: '-2rem',
                paddingRight: '3rem',
              },
              i: {
                display: 'block',
              },
            },
          },
          '.tools': {
            position: 'absolute',
            bottom: '$margin',
            right: '$margin',
            display: 'flex',
            gap: '$margin',
            justifyContent: 'flex-end',
            width: '100%',
            zIndex: '3',
          },
        }}
        onClick={() => setLightbox(null)}
      >
        <Box className="wrapper" />
        <Box
          className="close"
          onClick={() => setLightbox(null)}
          css={{
            position: 'fixed',
            top: '$margin',
            right: '$margin',
          }}
        >
          &times;
        </Box>
        <AnimatePresence>
          {showInfo && <TokenInfo index={lightbox} tokens={tokens} />}
        </AnimatePresence>
        <Box className="tools" onClick={(e) => e.stopPropagation()}>
          {showInfo ? (
            <Button variant="outline" onClick={() => setShowInfo(false)}>
              Hide info
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={() =>
                preview
                  ? setShowInfo(true)
                  : window.open(`/token/${tokens[lightbox].tokenId}`)
              }
            >
              Show info
            </Button>
          )}
        </Box>
        <Box className="nav prev" onClick={prev}>
          <i>&larr;</i>
        </Box>
        <Box className="nav next" onClick={next}>
          <i>&rarr;</i>
        </Box>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '$dmargin',
            right: '$dmargin',
            bottom: '$dmargin',
            left: '$dmargin',
          }}
        >
          <img src={ipfsImage(tokens[lightbox].image)} />
        </Box>
      </MotionBox>
    </PreventOutsideScroll>
  )

  return (
    <>
      <AnimatePresence>{lightboxEl}</AnimatePresence>
      <Box
        {...props}
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '$margin',
          marginBottom: '$margin',
          figure: {
            display: 'inline-block',
            cursor: 'zoom-in',
            figcaption: {
              textAlign: 'left',
            },
          },
          '@sm': {
            columns: 1,
          },
          ...css,
        }}
      >
        {tokens.map((image, i) => (
          <Figure
            key={image.tokenId}
            onClick={() => setLightbox(i)}
            image={<img src={ipfsImage(image.image)} alt="" />}
            caption={`0${image.tokenId}. ${image.name}`}
          />
        ))}
      </Box>
    </>
  )
}
