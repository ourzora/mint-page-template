import { Text, Box } from '@components/primitives'
import { ipfsImage } from '@lib/helpers'
import { baseUrl } from '@lib/constants'

export function Token({ metadata }) {
  const { name, tokenId, image, attributes = [] } = metadata

  return (
    <>
      <Box
        css={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Box css={{ display: 'grid', gridTemplateColumns: '10em 1fr' }}>
            <Box>ID:</Box>
            <Box>{tokenId}</Box>
          </Box>
          <Box css={{ display: 'grid', gridTemplateColumns: '10em 1fr' }}>
            <Box>Name:</Box>
            <Box>{name}</Box>
          </Box>
          <br />
          <Box>
            {attributes.map(({ trait_type, value }) => (
              <Box
                css={{ display: 'grid', gridTemplateColumns: '10em 1fr' }}
                key={trait_type}
              >
                <Box>{trait_type}:</Box>
                <Box>{value}</Box>
              </Box>
            ))}
          </Box>
          <br />
          <br />
          <Text>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${baseUrl}/api/metadata/${tokenId}`}
            >
              View Metadata
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}#code`}
            >
              View Contract
            </a>
          </Text>
          <Text>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://zora.co/collections/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`}
            >
              View on Zora
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`}
            >
              View on Opensea
            </a>
          </Text>
        </Box>
      </Box>
      <Box
        css={{
          display: 'flex',
          maxHeight: 'calc(100vh - 8rem)',
          width: '100%',
          img: {
            objectFit: 'contain',
          },
        }}
      >
        <Box
          as="img"
          src={ipfsImage(image)}
          css={{
            width: '100%',
            display: 'block',
          }}
        />
      </Box>
    </>
  )
}
