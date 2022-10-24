import { SubgraphERC721Drop } from 'models/subgraph'
import ReactMarkdown from 'react-markdown'
import { ipfsImage } from '@lib/helpers'
import { maxWidth, heroImage, wrapWords } from 'styles/styles.css'
import { MintAndPresaleComponent } from '@components/MintAndPresaleComponent'
import { MintDetails } from '@components/MintDetails'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { useCollectionMetadata } from 'hooks/useCollectionMetadata'
import { useDisconnect } from 'wagmi'
import {
  vars,
  Box,
  Flex,
  Well,
  Stack,
  Text,
  Button,
  Paragraph,
  SpinnerOG,
} from '@zoralabs/zord'

export function CollectionInner({
  collection,
  username,
}: {
  collection: SubgraphERC721Drop
  username?: string
}) {
  const collectionContext = useERC721DropContract()
  const { metadataDetails } = useCollectionMetadata(
    collectionContext.contractConfig.metadataRenderer
  )

  const { disconnect } = useDisconnect()
  return (
    <Flex
      mt="x3"
      align="center"
      direction={{ '@initial': 'column', '@768': 'row-reverse' }}
      gap="x3"
      p={{ '@initial': 'x1', '@576': 'x10' }}
      w="100%"
      style={{ maxWidth: 1360, margin: 'auto', minHeight: '80vh' }}
    >
      <Flex flex={{ '@initial': '1', '@1024': '1' }} p="x2" justify="center">
        {metadataDetails?.imageURI ? (
          <img
            className={heroImage}
            src={ipfsImage(metadataDetails?.imageURI)}
            alt={collectionContext.name}
          />
        ) : (
          <SpinnerOG />
        )}
      </Flex>
      <Box flex={{ '@initial': '1', '@1024': 'none' }} className={maxWidth} p="x4">
        <Stack gap="x2" mb="x3">
          <Text variant="display-md" mb="x2">
            {collectionContext.name}
          </Text>
          <Paragraph className={wrapWords} mb="x2">
            <ReactMarkdown>
              {JSON.parse(`"${metadataDetails?.description || '...'}"`)}
            </ReactMarkdown>
          </Paragraph>
        </Stack>

        <Box>
          {collectionContext != null ? (
            <>
              <MintAndPresaleComponent collection={collectionContext} />

              <Box>
                {username && (
                  <Well borderColor="accent" py="x1" mt="x4">
                    <Flex justify="space-between" align="center">
                      <Text fontSize={14}>Logged in as {username}</Text>
                      <Button
                        pill
                        variant="ghost"
                        onClick={disconnect}
                        positive="relative"
                        style={{ left: vars.space.x5 }}
                      >
                        <Box as="span" fontSize={14}>
                          Disconnect
                        </Box>
                      </Button>
                    </Flex>
                  </Well>
                )}
              </Box>
              <Well borderColor="accent" fontSize={14} mt="x4">
                <MintDetails collection={collectionContext} hideToggle={true} />
              </Well>
            </>
          ) : (
            <Paragraph align="center" mt="x8">
              <SpinnerOG />
            </Paragraph>
          )}
        </Box>
      </Box>
    </Flex>
  )
}
