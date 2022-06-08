import { ethers } from 'ethers'
import { useMemo } from 'react'
import { Box, Text } from '@components/primitives'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { getContractData } from '@lib/helpers'
import { useAccount } from 'wagmi'
import { AllowlistCheck } from '@components/AllowlistCheck'
import { HomeGrid } from '@components/Brand'
import { MintStatus } from '@components/MintStatus'
import { useCountdown } from '@hooks/useCountdown'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { useContractMethod } from '@hooks/useContractMethod'
import { useTotalSupply } from '@hooks/useTotalSupply'
import { useContractMint } from '@hooks/useContractMint'
import {
  title,
  contractAddress,
  description,
  baseUrl,
  launchTime,
  presaleLaunchTime,
} from '@lib/constants'

const Home = ({ contractData }) => {
  // Get and update total supply
  let [{ totalSupply }, updateTotalSupply] = useTotalSupply()
  const nothingMinted = Number(totalSupply) === 0
  // Fallbacks for totalSupply - show 12 samples if nothing is minted yet
  let localTotalSupply = Number(totalSupply) || Number(contractData.totalSupply) || 12
  // HOOKS
  const { data: accountData } = useAccount()
  // Countdown & presale countdown
  const { countdownText } = useCountdown(launchTime)
  const { countdownText: presaleCountdownText } = useCountdown(presaleLaunchTime)
  // Sale active states
  const {
    contractData: saleIsActive,
    contractError: saleStateError,
    contractLoading: saleStateLoading,
  } = useContractMethod()
  const {
    contractData: presaleIsActive,
    contractError: presaleStateError,
    contractLoading: presaleStateLoading,
  } = useContractMethod()

  // Mint function
  const [
    {
      isLoading: isMintLoading,
      isAwaitingApproval,
      isMinting,
      isSuccess,
      txHash,
      data,
      mintQuantity,
      error: mintError,
    },
    mint,
  ] = useContractMint()
  // Load initial state for recent tokens
  const [{ isLoading: tokensLoading, tokens }, updateRecentTokens] = useRecentTokens({
    url: `${baseUrl}/api/metadata/${nothingMinted ? 'sample/' : ''}`,
    reverse: false,
    start: Math.max(0, localTotalSupply - 12),
    end: localTotalSupply,
  })

  // EFFECTS
  useMemo(() => updateTotalSupply(), [, isSuccess])
  // Update tokens once totalSupply has been fetched
  useMemo(
    () =>
      updateRecentTokens({
        start: Math.max(0, totalSupply - 12),
        end: localTotalSupply,
      }),
    [localTotalSupply, nothingMinted]
  )
  // Redirect after successful mint
  useMemo(() => {
    if (isSuccess && data.args) {
      const end = Number(data.args.slice(-1).toString())
      const start = end - mintQuantity + 1
      const tokenIds = Array.from({ length: end - start + 1 }, (_, i) => i + start)
      window.location.href = `/token/${tokenIds.join(',')}`
    }
  }, [isSuccess, data && data.args])

  return (
    <HomeGrid>
      <Box>
        <Text>
          <strong>{title}</strong>
        </Text>
        <Text>{description}</Text>
        <hr />
        <ConnectWallet />
        <hr />
        <MintStatus
          collection={{
            ...contractData,
            address: contractAddress,
            maxSupply: contractData.config.editionSize,
            totalMinted: totalSupply,
          }}
        />
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

export async function getStaticProps() {
  const contractData = await getContractData('totalSupply', 'config', 'salesConfig')
  return {
    props: {
      contractData: !contractData.error ? contractData : null,
    },
    revalidate: false,
  }
}

export default Home
