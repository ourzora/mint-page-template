import { Box, Well, Text, Paragraph, SpinnerOG } from '@zoralabs/zord'
import { MintStatus } from '@components/MintStatus'
import { MintDetails } from '@components/MintDetails'
import { ipfsImage } from '@lib/helpers'
import { maxWidth, border, heroImage } from 'styles/styles.css'
import Image from 'next/image'

const DropSection = ({ collection, isSecond }) => (
  <Box className={maxWidth} p="x4">
    <Text variant="display-md" mb="x8" align="center">
      {collection.name}
    </Text>
    <Text>{collection?.editionMetadata?.description}</Text>
    <Box mt="x8" mx="auto" style={{ maxWidth: 560 }}>
      <Well className={border} p="x6" style={{ borderBottom: 0 }}>
        <Image
          className={heroImage}
          src={ipfsImage(collection.editionMetadata.imageURI)}
          alt={collection.name}
          height={500}
          width={500}
        />
      </Well>
      <Well className={border} p="x6">
        <Box>
          {collection != null ? (
            <>
              <MintStatus collection={collection} isSecond={isSecond} />
              <MintDetails collection={collection} showPresale={false} />
            </>
          ) : (
            <Paragraph align="center" mt="x8">
              <SpinnerOG />
            </Paragraph>
          )}
        </Box>
      </Well>
    </Box>
  </Box>
)

export default DropSection
