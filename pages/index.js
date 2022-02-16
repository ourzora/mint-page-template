import { utils, BigNumber } from 'ethers'
import { Box, Text } from '@components/primitives'
import { ConnectWallet } from '@components/ConnectWallet'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'
import { useCountdown } from '@hooks/useCountdown'

const Home = ({ contractData }) => {
  const [{ data: accountData }, disconnect] = useAccount()
  const [{ allowlistChecked, allowlistVerified }, checkAllowlist] = useAllowlist()
  const { countdownText } = useCountdown(process.env.NEXT_PUBLIC_LAUNCH_TIME)

  return (
    <Box css={{ textAlign: 'center' }}>
      <Text>Hello.</Text>
      <ConnectWallet />
      {countdownText && (
        <>
          <br />
          Launching in: {countdownText}
          <br />
        </>
      )}
      {contractData && (
        <>
          <br />
          {utils.formatEther(contractData.ETH_PRICE)} ETH
          <br />
          {BigNumber.from(contractData.totalSupply).toString()} /{' '}
          {BigNumber.from(contractData.maxSupply).sub(1).toString()}
          <br />
          {BigNumber.from(contractData.MAX_MINT_COUNT).sub(1).toString()} per transaction
          <br />
        </>
      )}
      {accountData && (
        <>
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
      contractData: !contractData.error ? contractData : null,
    },
  }
}

export default Home
