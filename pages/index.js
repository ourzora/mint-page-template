import Contract from '../contracts/artifacts/contracts/YourContract.sol/YourContract.json'

import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { Box, Text } from '@components/primitives'
import { Button } from '@components/Button'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { extractContractData } from '@lib/helpers'
import { chains } from '@lib/chains'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'
import { useCountdown } from '@hooks/useCountdown'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { useContractMethod } from '@hooks/useContractMethod'
import { useTotalSupply } from '@hooks/useTotalSupply'
import { useContractMint } from '@hooks/useContractMint'

const Home = ({ contractData }) => {
  const [{ data: accountData }] = useAccount()
  const [{ allowlistChecked, allowlistVerified }, checkAllowlist] = useAllowlist()
  const { countdownText } = useCountdown(process.env.NEXT_PUBLIC_LAUNCH_TIME)
  const {
    contractResponse: saleIsActive,
    contractError: saleStateError,
    contractLoading: saleStateLoading,
  } = useContractMethod(Contract.abi, 'saleActive')
  const {
    contractResponse: presaleIsActive,
    contractError: presaleStateError,
    contractLoading: presaleStateLoading,
  } = useContractMethod(Contract.abi, 'presaleActive')
  const [
    { totalSupply, contractError: supplyError, contractLoading: supplyLoading },
    updateTotalSupply,
  ] = useTotalSupply(Contract.abi)
  const { isLoading: tokensLoading, tokens } = useRecentTokens({
    start: 1,
    end: 5,
    reverse: false,
  })
  const [
    {
      isLoading: isMintLoading,
      isAwaitingApproval,
      isMinting,
      isSuccess,
      txHash,
      data,
      error: mintError,
    },
    mint,
  ] = useContractMint(Contract.abi)
  const [mintQuantity, setMintQuantity] = useState(1)

  useEffect(() => updateTotalSupply(), [, isSuccess])

  return (
    <Box css={{ textAlign: 'center' }}>
      <Text>
        <strong>{process.env.NEXT_PUBLIC_CONTRACT_NAME} NFT Project.</strong>
      </Text>
      <Text>
        {saleStateLoading ? (
          'Loading...'
        ) : saleStateError ? (
          <Text error>Error loading contract</Text>
        ) : saleIsActive ? (
          'Sale is active.'
        ) : (
          'Sale is not active.'
        )}
      </Text>
      <Text>
        {presaleStateLoading ? (
          'Loading...'
        ) : presaleStateError ? (
          <Text error>Error loading contract</Text>
        ) : presaleIsActive ? (
          'Presale is active.'
        ) : (
          'Presale is not active.'
        )}
      </Text>
      <ConnectWallet />
      {contractData && (
        <>
          <br />
          {ethers.utils.formatEther(contractData.ETH_PRICE)} ETH
          <br />
          {supplyLoading || !totalSupply ? '?' : totalSupply} /{' '}
          {contractData.maxSupply - 1}
          <br />
          {contractData.MAX_MINT_COUNT - 1} per transaction
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
          {allowlistChecked ? (
            <>
              {allowlistVerified
                ? 'You are on the allowlist!'
                : 'You are not on the allowlist :('}
              <br />
              <br />
            </>
          ) : (
            <>
              <Button onClick={() => checkAllowlist(accountData.address)}>
                Am I on the allowlist?
              </Button>
              <br />
              <br />
            </>
          )}
        </>
      )}

      {contractData &&
        accountData &&
        presaleIsActive &&
        (isMintLoading ? (
          'Loading...'
        ) : isSuccess && data ? (
          JSON.stringify(data)
        ) : isMinting && txHash ? (
          <>
            Minting...
            <br />
            <a href={`https://etherscan.io/tx/${txHash}`}>View transaction</a>
          </>
        ) : (
          <>
            <input
              style={{ width: '3em', marginRight: '1em' }}
              type="number"
              value={mintQuantity}
              onChange={(e) => {
                setMintQuantity(
                  Math.max(
                    Math.min(Number(e.target.value), contractData.MAX_MINT_COUNT - 1),
                    1
                  )
                )
              }}
            />
            <Button
              disabled={isAwaitingApproval || isMinting}
              onClick={() =>
                mint({
                  mintPrice: contractData.PRESALE_ETH_PRICE,
                  quantity: mintQuantity,
                  method: 'presaleMint',
                })
              }
            >
              {isAwaitingApproval
                ? 'Awaiting approval'
                : isMinting
                ? 'Minting...'
                : 'Presale Mint'}
            </Button>
          </>
        ))}

      {contractData &&
        accountData &&
        saleIsActive &&
        (isMintLoading ? (
          'Loading...'
        ) : isSuccess && data ? (
          JSON.stringify(data)
        ) : isMinting && txHash ? (
          <>
            Minting...
            <br />
            <a href={`https://etherscan.io/tx/${txHash}`}>View transaction</a>
          </>
        ) : (
          <>
            <input
              style={{ width: '3em', marginRight: '1em' }}
              type="number"
              value={mintQuantity}
              onChange={(e) => {
                setMintQuantity(
                  Math.max(
                    Math.min(Number(e.target.value), contractData.MAX_MINT_COUNT - 1),
                    1
                  )
                )
              }}
            />
            <Button
              disabled={isAwaitingApproval || isMinting}
              onClick={() =>
                mint({ mintPrice: contractData.ETH_PRICE, quantity: mintQuantity })
              }
            >
              {isAwaitingApproval
                ? 'Awaiting approval'
                : isMinting
                ? 'Minting...'
                : 'Mint'}
            </Button>
          </>
        ))}
      <br />
      {accountData && mintError && <Text error>{mintError}</Text>}
      <br />
      <h1>
        <strong>Gallery</strong>
      </h1>
      <br />
      {tokensLoading ? 'Loading...' : <Gallery preview tokens={tokens} />}
    </Box>
  )
}

const getContractData = async (...props) => {
  try {
    const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
    const chain = chains.find((x) => x.id == chainId)?.rpcUrls[0]
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      Contract.abi,
      new ethers.providers.JsonRpcProvider(chain)
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
