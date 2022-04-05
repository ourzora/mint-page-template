import Contract from '../contracts/artifacts/contracts/YourContract.sol/YourContract.json'

import { ethers } from 'ethers'
import { useMemo } from 'react'
import { Box, Text } from '@components/primitives'
import { Button, ButtonSet } from '@components/Button'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { extractContractData } from '@lib/helpers'
import { chains } from '@lib/chains'
import { useAccount } from 'wagmi'
import { AllowlistCheck } from '@components/AllowlistCheck'
import { HomeGrid } from '@components/Brand'
import { MintButton } from '@components/MintButton'
import { useCountdown } from '@hooks/useCountdown'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { useContractMethod } from '@hooks/useContractMethod'
import { useTotalSupply } from '@hooks/useTotalSupply'
import { useContractMint } from '@hooks/useContractMint'
import {
  title,
  description,
  baseUrl,
  launchTime,
  presaleLaunchTime,
  chainId,
  contractAddress,
} from '@lib/constants'

const Home = ({ contractData }) => {
  // Get and update total supply
  let [{ totalSupply }, updateTotalSupply] = useTotalSupply(Contract.abi)
  const nothingMinted = Number(totalSupply) === 0
  // Fallbacks for totalSupply - show 12 samples if nothing is minted yet
  let localTotalSupply = Number(totalSupply) || Number(contractData.totalSupply) || 12
  // HOOKS
  const [{ data: accountData }] = useAccount()
  // Countdown & presale countdown
  const { countdownText } = useCountdown(launchTime)
  const { countdownText: presaleCountdownText } = useCountdown(presaleLaunchTime)
  // Sale active states
  const {
    contractData: saleIsActive,
    contractError: saleStateError,
    contractLoading: saleStateLoading,
  } = useContractMethod(Contract.abi, 'saleActive')
  const {
    contractData: presaleIsActive,
    contractError: presaleStateError,
    contractLoading: presaleStateLoading,
  } = useContractMethod(Contract.abi, 'presaleActive')

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
  ] = useContractMint(Contract.abi)
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
        {!saleIsActive && <AllowlistCheck />}
        {contractData && (
          <>
            Mint price:{' '}
            {contractData.ETH_PRICE && ethers.utils.formatEther(contractData.ETH_PRICE)}{' '}
            ETH
            <br />
            {contractData.PRESALE_ETH_PRICE && (
              <>
                Presale mint price:{' '}
                {ethers.utils.formatEther(contractData.PRESALE_ETH_PRICE)} ETH
              </>
            )}
            <br />
            {nothingMinted ? '0' : totalSupply} / {contractData.maxSupply}
            <br />
            {contractData.MAX_MINT_COUNT} per transaction
          </>
        )}
        {/*

            SOLD OUT!

        */}
        {!nothingMinted && totalSupply >= contractData.maxSupply && (
          <>
            <hr />
            <Text css={{ marginBottom: '0' }}>Sold out!</Text>
            <Text>
              But you can still pick up a piece on the secondary market at
              <br />
              <ButtonSet>
                <Button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://zora.co/collections/${contractAddress}`}
                  >
                    Zora
                  </a>
                </Button>
              </ButtonSet>
            </Text>
          </>
        )}
        {/*

            Not Sold Out

        */}
        {nothingMinted || totalSupply < contractData.maxSupply ? (
          <>
            <hr />
            <strong>Presale</strong>
            <br />
            {presaleIsActive ? (
              <Text>Presale is Live now!</Text>
            ) : (
              <>
                {presaleCountdownText ? (
                  <>
                    {presaleCountdownText}
                    <br />
                    {'' + new Date(presaleLaunchTime)}
                  </>
                ) : (
                  'Presale finished'
                )}
              </>
            )}
            <br />
            <br />
            <strong>Public sale</strong>
            <br />
            {saleIsActive ? (
              <Text>Sale is Live now!</Text>
            ) : (
              <>
                {countdownText ? (
                  <>
                    {countdownText}
                    <br />
                    {'' + new Date(launchTime)}
                  </>
                ) : (
                  'Sale finished'
                )}
              </>
            )}
          </>
        ) : null}
        {nothingMinted || totalSupply < contractData.maxSupply ? (
          <>
            {contractData &&
              accountData &&
              presaleIsActive &&
              allowlistIndex > -1 &&
              (isMintLoading ? (
                'Loading...'
              ) : isSuccess && data ? (
                'Minted successfully!'
              ) : isMinting && txHash ? (
                <>
                  Minting...
                  <br />
                  <a href={`https://etherscan.io/tx/${txHash}`}>View transaction</a>
                </>
              ) : (
                <MintButton
                  buttonText="Presale Mint"
                  isAwaitingApproval={isAwaitingApproval}
                  isMinting={isMinting}
                  mintPrice={contractData.PRESALE_ETH_PRICE}
                  maxQuantity={contractData.PRESALE_MAX_MINT_COUNT}
                  onClick={(mintQuantity) =>
                    mint({
                      mintPrice: contractData.PRESALE_ETH_PRICE,
                      quantity: mintQuantity,
                      method: 'presaleMint',
                      args: [allowlistIndex, allowlistProof],
                    })
                  }
                />
              ))}

            {contractData &&
              accountData &&
              saleIsActive &&
              (isMintLoading ? (
                'Loading...'
              ) : isSuccess && data ? (
                'Minted successfully!'
              ) : isMinting && txHash ? (
                <>
                  Minting...
                  <br />
                  <a href={`https://etherscan.io/tx/${txHash}`}>View transaction</a>
                </>
              ) : (
                <MintButton
                  buttonText="Mint"
                  isAwaitingApproval={isAwaitingApproval}
                  isMinting={isMinting}
                  mintPrice={contractData.ETH_PRICE}
                  maxQuantity={contractData.MAX_MINT_COUNT}
                  onClick={(mintQuantity) =>
                    mint({
                      mintPrice: contractData.ETH_PRICE,
                      quantity: mintQuantity,
                    })
                  }
                />
              ))}
            {mintError ? (
              <>
                <br />
                <Text error>{mintError}</Text>
              </>
            ) : null}
          </>
        ) : null}
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

const getContractData = async (...props) => {
  try {
    const chain = chains.find((x) => x.id == chainId)?.rpcUrls[0]
    const contract = new ethers.Contract(
      contractAddress,
      Contract.abi,
      new ethers.providers.StaticJsonRpcProvider(chain)
    )

    const data = await extractContractData(contract, ...props)
    return data
  } catch (e) {
    return { error: e }
  }
}

export async function getStaticProps() {
  const contractData = await getContractData(
    'ETH_PRICE',
    'PRESALE_ETH_PRICE',
    'MAX_MINT_COUNT',
    'PRESALE_MAX_MINT_COUNT',
    'totalSupply',
    'maxSupply'
  )

  return {
    props: {
      contractData: !contractData.error ? contractData : null,
    },
    revalidate: false,
  }
}

export default Home
