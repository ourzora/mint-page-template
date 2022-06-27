import request from 'graphql-request'
import { Grid, Box, Heading, Paragraph } from '@zoralabs/zord'
import { ConnectWallet } from '@components/ConnectWallet'
import { utils } from 'ethers'
import { GetStaticProps, NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import { MintStatus } from '@components/MintStatus'
import { GET_COLLECTION_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { ipfsImage } from '@lib/helpers'
import { contractAddress, baseUrl } from '@lib/constants'

interface HomePageProps {
  contractData: SubgraphERC721Drop
}

const HomePage: NextPage<HomePageProps> = ({ contractData }) => {
  const nothingMinted = Number(contractData.totalMinted) === 0
  // Load initial state for recent tokens
  const { isLoading: tokensLoading, tokens } = useRecentTokens({
    url: `${baseUrl}/api/metadata/${nothingMinted ? 'sample/' : ''}`,
    reverse: false,
    start: Math.max(0, Number(contractData.totalMinted) - 12),
    end: Number(contractData.totalMinted),
  })

  return (
    <Grid>
      <Box>
        <Paragraph>{contractData.name}</Paragraph>
        <hr />
        <ConnectWallet />
        <hr />
        <MintStatus collection={contractData} />
        <hr />
        <br />
      </Box>
      <Box>
        <Heading size="md">Gallery</Heading>
        <br />
        <Grid>
          {tokensLoading
            ? 'Loading...'
            : tokens.map((token: any) => (
                <Box>
                  <img src={ipfsImage(token.image)} alt="" />
                  {token.name}
                </Box>
              ))}
        </Grid>
      </Box>
    </Grid>
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
