import request from 'graphql-request'
import { Box, Text } from '@components/primitives'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { isAddress } from 'ethers/lib/utils'
import { GetStaticProps, NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import { HomeGrid } from '@components/Brand'
import { MintStatus } from '@components/MintStatus'
import { GET_COLLECTION_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { contractAddress, baseUrl } from '@lib/constants'

interface HomePageProps {
  contractData: SubgraphERC721Drop
}

const HomePage: NextPage<HomePageProps> = ({ contractData }) => {
  const nothingMinted = Number(contractData.totalMinted) === 0
  // Load initial state for recent tokens
  const [{ isLoading: tokensLoading, tokens }] = useRecentTokens({
    url: `${baseUrl}/api/metadata/${nothingMinted ? 'sample/' : ''}`,
    reverse: false,
    start: Math.max(0, Number(contractData.totalMinted) - 12),
    end: Number(contractData.totalMinted),
  })

  return (
    <HomeGrid>
      <Box>
        <Text>
          <strong>{contractData.name}</strong>
        </Text>
        <hr />
        <ConnectWallet />
        <hr />
        <MintStatus collection={contractData} />
        <hr />
        <br />
      </Box>
      <Box>
        <h1>
          <strong>Gallery</strong>
        </h1>
        <br />
        {tokensLoading ? (
          'Loading...'
        ) : (
          <Gallery preview={nothingMinted} tokens={tokens} />
        )}
      </Box>
    </HomeGrid>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async (context) => {
  if (!isAddress(contractAddress)) {
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

  console.log(SUBGRAPH_URL, { erc721Drop })

  return {
    props: { contractData: erc721Drop },
    revalidate: 60, // every minute
  }
}
