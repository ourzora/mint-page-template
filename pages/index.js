import Contract from '../contracts/artifacts/contracts/YourContract.sol/YourContract.json'

import { ethers } from 'ethers'
import { useMemo } from 'react'
import { Box, Text } from '@components/primitives'
import { Button } from '@components/Button'
import { ConnectWallet } from '@components/ConnectWallet'
import { Gallery } from '@components/Gallery'
import { extractContractData } from '@lib/helpers'
import { chains } from '@lib/chains'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'
import { MintButton } from '@components/MintButton'
import { useCountdown } from '@hooks/useCountdown'
import { useRecentTokens } from '@hooks/useRecentTokens'
import { useContractMethod } from '@hooks/useContractMethod'
import { useTotalSupply } from '@hooks/useTotalSupply'
import { useContractMint } from '@hooks/useContractMint'

const Home = ({ contractData }) => {
  // HOOKS
  const [{ data: accountData }] = useAccount()
  const [
    {
      allowlistRoot,
      allowlistProof,
      allowlistIndex,
      allowlistChecked,
      allowlistVerified,
    },
    checkAllowlist,
  ] = useAllowlist()
  const { countdownText } = useCountdown(process.env.NEXT_PUBLIC_LAUNCH_TIME)
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
  const [
    { totalSupply, contractError: supplyError, contractLoading: supplyLoading },
    updateTotalSupply,
  ] = useTotalSupply(Contract.abi)
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
  const { isLoading: tokensLoading, tokens } = useRecentTokens({
    start: 1,
    end: 12,
    reverse: false,
  })

  // EFFECTS
  useMemo(() => {
    return accountData?.address && checkAllowlist(accountData.address)
  }, [, accountData && accountData.address])

  useMemo(() => updateTotalSupply(), [, isSuccess])

  return (
    <Box css={{ textAlign: 'center', padding: '$dmargin' }}>
      <Text>
        <strong>{process.env.NEXT_PUBLIC_CONTRACT_NAME} NFT Project.</strong>
      </Text>
      {countdownText && (
        <>
          <br />
          Launching in: {countdownText}
          <br />
        </>
      )}
      <hr />
      <Text>Allowlist check:</Text>

      <ConnectWallet />

      {accountData && (
        <>
          <br />
          0x{allowlistRoot}
          <br />
          Allowlist index: {allowlistIndex}
          <br />
          {allowlistChecked && (
            <>
              <br />
              {allowlistIndex > -1 && allowlistVerified ? (
                <Button offset={50}>You are on the allowlist!</Button>
              ) : (
                <Text error>You are not on the allowlist :(</Text>
              )}
            </>
          )}
        </>
      )}

      <hr />

      {contractData && (
        <>
          Mint price:{' '}
          {contractData.ETH_PRICE && ethers.utils.formatEther(contractData.ETH_PRICE)} ETH
          <br />
          {contractData.PRESALE_ETH_PRICE && (
            <>
              Presale mint price:{' '}
              {ethers.utils.formatEther(contractData.PRESALE_ETH_PRICE)} ETH
            </>
          )}
          <br />
          {totalSupply || contractData.totalSupply} / {contractData.maxSupply - 1}
          <br />
          {contractData.MAX_MINT_COUNT - 1} per transaction
        </>
      )}

      <hr />
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

      {contractData &&
        accountData &&
        presaleIsActive &&
        allowlistIndex > -1 &&
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
      <hr />
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
          <MintButton
            buttonText="Mint"
            isAwaitingApproval={isAwaitingApproval}
            isMinting={isMinting}
            mintPrice={contractData.ETH_PRICE}
            maxQuantity={contractData.MAX_MINT_COUNT - 1}
            onClick={(mintQuantity) =>
              mint({
                mintPrice: contractData.ETH_PRICE,
                quantity: mintQuantity,
              })
            }
          />
        ))}
      {mintError && (
        <>
          <br />
          <Text error>{mintError}</Text>
        </>
      )}
      <hr />
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
