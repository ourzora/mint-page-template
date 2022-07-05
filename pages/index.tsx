import request from 'graphql-request'
import { Box, Stack, Flex, Well, Text } from '@zoralabs/zord'
import { ConnectWallet } from '@components/ConnectWallet'
import { utils } from 'ethers'
import { GetStaticProps, NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import { MintStatus } from '@components/MintStatus'
import { GET_COLLECTION_QUERY, SUBGRAPH_URL } from 'constants/queries'
// import { useRecentTokens } from '@hooks/useRecentTokens'
import { ipfsImage } from '@lib/helpers'
import { contractAddress, baseUrl } from '@lib/constants'
import { header, maxWidth, border, heroImage } from 'styles/styles.css'

interface HomePageProps {
  contractData: SubgraphERC721Drop
}

const HomePage: NextPage<HomePageProps> = ({ contractData }) => {
  // const nothingMinted = Number(contractData.totalMinted) === 0
  // Load initial state for recent tokens
  // const { isLoading: tokensLoading, tokens } = useRecentTokens({
  //   url: `${baseUrl}/api/metadata/${nothingMinted ? 'sample/' : ''}`,
  //   reverse: false,
  //   start: Math.max(0, Number(contractData.totalMinted) - 12),
  //   end: Number(contractData.totalMinted),
  // })

  return (
    <>
      <Flex justify="flex-end" p="x4" className={header}>
        <ConnectWallet />
      </Flex>
      <Stack mt="x3" gap="x3">
        <Box className={maxWidth} p="x4">
          <Text variant="display-md" mb="x8" align="center">
            {contractData.name}
          </Text>
          <Text>{contractData?.editionMetadata?.description}</Text>
          <Box mt="x8" mx="auto" style={{ maxWidth: 560 }}>
            <Well className={border} p="x6" style={{ borderBottom: 0 }}>
              <img
                className={heroImage}
                src={ipfsImage(contractData.editionMetadata.imageURI)}
                alt={contractData.name}
              />
            </Well>
            <MintStatus className={border} collection={contractData} />
          </Box>
        </Box>
        <Box p="x4" className={maxWidth}>
          <Text as="h2" mt="x0" mb="x2" variant="heading-sm">
            About
          </Text>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et gravida
            dolor, non finibus nibh. Nullam sollicitudin molestie sem vel fermentum.
            Suspendisse vitae tincidunt justo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus et gravida dolor, non finibus nibh. Nullam
            sollicitudin molestie sem vel fermentum. Suspendisse vitae tincidunt justo.
          </Text>

          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et gravida
            dolor, non finibus nibh. Nullam sollicitudin molestie sem vel fermentum.
            Suspendisse vitae tincidunt justo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus et gravida dolor, non finibus nibh. Nullam
            sollicitudin molestie sem vel fermentum. Suspendisse vitae tincidunt justo.
          </Text>
        </Box>
        <Box p="x4" className={maxWidth} style={{ maxWidth: 400 }}>
          <Flex as="p" align="center" justify="space-between">
            <a href="https://twitter.com/ourZORA">Twitter</a>
            <a href="https://discord.com/invite/Va58aMrcwk">Discord</a>
            <a href={`https://etherscan.io/address/${contractAddress}`}>Etherscan</a>
            <a href={`https://zora.co/collections/${contractAddress}`}>Zora</a>
          </Flex>
        </Box>
      </Stack>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  if (!utils.isAddress(contractAddress)) {
    return {
      notFound: true,
    }
  }

  type Response = {
    erc721Drop: SubgraphERC721Drop
  }

  const { erc721Drop } = (await request(SUBGRAPH_URL, GET_COLLECTION_QUERY, {
    collectionAddress: contractAddress,
  })) as Response

  return {
    props: { contractData: erc721Drop },
    revalidate: 60, // every minute
  }
}
