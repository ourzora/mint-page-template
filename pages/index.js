import { utils, BigNumber } from 'ethers'
import { Box, Text } from '@components/primitives'
import { Button } from '@components/Button'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'
import { useCountdown } from '@hooks/useCountdown'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { useContractPaused } from '@hooks/useContractPaused'

const Home = ({ contractData }) => {
  const [{ data: accountData }] = useAccount()
  const [{ allowlistChecked, allowlistVerified }, checkAllowlist] = useAllowlist()
  const { countdownText } = useCountdown(process.env.NEXT_PUBLIC_LAUNCH_TIME)
  const { contractPaused, contractError, contractLoading } = useContractPaused()
  const { isLoading: tokensLoading, tokens } = useRecentTokens({
    start: 1,
    end: 5,
    reverse: false,
  })

  return (
    <Box css={{ textAlign: 'center' }}>
      <Text>
        <strong>YOURCONTRACT NFT Project.</strong>
      </Text>
      <Text>
        {contractLoading ? (
          'Loading...'
        ) : contractError ? (
          <Text error>Error loading contract</Text>
        ) : contractPaused ? (
          'Contract paused.'
        ) : (
          'Contract active.'
        )}
      </Text>
      <ConnectWallet />
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
      {countdownText && (
        <>
          <br />
          Launching in: {countdownText}
          <br />
        </>
      )}
      {accountData && (
        <>
          <br />
          {!allowlistChecked && (
            <Button onClick={() => checkAllowlist(accountData.address)}>
              Am I on the allowlist?
            </Button>
          )}
          {allowlistChecked && (
            <>
              {allowlistVerified
                ? 'You are on the allowlist!'
                : 'You are not on the allowlist :('}
            </>
          )}
        </>
      )}
      <br />
      <br />
      <h1>
        <strong>Gallery</strong>
      </h1>
      <br />
      {tokensLoading ? 'Loading...' : <Gallery preview tokens={tokens} />}
    </Box>
  )
}

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const response = await fetch(
    `${baseUrl}/api/contract-data/ETH_PRICE,MAX_MINT_COUNT,totalSupply,maxSupply`
  )
  const contractData = await response.json()
  return {
    props: {
      contractData: !contractData.error ? contractData : null,
    },
  }
}

export default Home
