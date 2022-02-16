import { utils, BigNumber } from 'ethers'
import { Box, Text } from '@components/primitives'
import { ConnectWallet } from '@components/ConnectWallet'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'

const Home = ({ contractData }) => {
  const [{ data: accountData }, disconnect] = useAccount()
  const [{ allowlistChecked, allowlistVerified }, checkAllowlist] = useAllowlist()

  return (
    <Box css={{ textAlign: 'center' }}>
      <Text>Hello.</Text>
      <ConnectWallet />
      {contractData && (
        <>
          <br />
          <br />
          {utils.formatEther(contractData.ETH_PRICE)} ETH
          <br />
          {BigNumber.from(contractData.totalSupply).toString()} /{' '}
          {BigNumber.from(contractData.maxSupply).sub(1).toString()}
          <br />
          {BigNumber.from(contractData.MAX_MINT_COUNT).sub(1).toString()} per transaction
        </>
      )}
      {accountData && (
        <>
          <br />
          <br />
          <button onClick={() => checkAllowlist(accountData.address)}>
            Check whitelist
          </button>
          {allowlistChecked && (
            <>
              <br />
              <br />
              {allowlistVerified ? 'You are on the list!' : 'You are not on the list'}
            </>
          )}
        </>
      )}
    </Box>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/contract-data/ETH_PRICE,MAX_MINT_COUNT,totalSupply,maxSupply`
  )
  const contractData = await response.json()
  return {
    props: {
      contractData,
    },
  }
}

export default Home
