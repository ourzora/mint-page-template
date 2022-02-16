import { utils, BigNumber } from 'ethers'
import { Box, Text } from '@components/primitives'
import { Button } from '@components/Button'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'
import { useCountdown } from '@hooks/useCountdown'

const Home = ({ contractData, tokens }) => {
  const [{ data: accountData }] = useAccount()
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
      <Gallery preview tokens={tokens} />
    </Box>
  )
}

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const response = await fetch(
    `${baseUrl}/api/contract-data/ETH_PRICE,MAX_MINT_COUNT,totalSupply,maxSupply`
  )
  const contractData = await response.json()

  // Fake tokens
  const end = 5
  let start = end - 12 + 1
  if (start < 1) start = 1
  const tokenIds = Array.from({ length: end - start + 1 }, (_, i) => i + start)
  const tokens = await Promise.all(
    tokenIds
      .reverse()
      .map((token) =>
        fetch(`${baseUrl}/api/metadata/sample/${token}.json`).then((r) => r.json())
      )
  )

  return {
    props: {
      tokens,
      contractData: !contractData.error ? contractData : null,
    },
  }
}

export default Home
