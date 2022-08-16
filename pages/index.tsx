import request from 'graphql-request'
import { utils } from 'ethers'
import { GetStaticProps } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import { GET_COLLECTION_QUERY, SUBGRAPH_URL } from 'constants/queries'
import { contractAddress } from '@lib/constants'
import HomePage from '@components/HomePage/HomePage'

const LandingPage = ({collection}) => <HomePage collection={collection} />
export default LandingPage;

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
    props: { collection: erc721Drop },
    revalidate: 60, // every minute
  }
}
