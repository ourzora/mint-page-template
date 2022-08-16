import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  vars,
  Box,
  Button,
  Eyebrow,
  Paragraph,
  Flex,
  Heading,
  Text,
  Stack,
  SpinnerOG,
} from '@zoralabs/zord'
import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { SubgraphERC721Drop } from 'models/subgraph'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { useAccount, useNetwork } from 'wagmi'
import { formatCryptoVal } from 'lib/numbers'
import { OPEN_EDITION_SIZE } from 'lib/constants'
import { parseInt } from 'lodash'
import { waitingApproval, priceDateHeading, mintCounterInput } from 'styles/styles.css'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { CountdownTimer } from 'components/CountdownTimer'
import { cleanErrors } from 'lib/errors'
import { AllowListEntry } from 'lib/merkle-proof'
import { isValidDate } from 'components/CountdownTimer'
import type { ContractTransaction } from 'ethers'

function SaleStatus({
  collection,
  isMinted,
  setIsMinted,
  presale,
  mintCounter = 1,
  availableMints,
  allowlistEntry,
}: {
  collection: SubgraphERC721Drop
  isMinted: boolean
  setIsMinted: (state: boolean) => void
  presale: boolean
  mintCounter: number
  availableMints: number
  allowlistEntry?: AllowListEntry
}) {
  const { data: account } = useAccount()
  const { activeChain } = useNetwork()
  const dropProvider = useERC721DropContract()
  const [awaitingApproval, setAwaitingApproval] = useState<boolean>(false)
  const [isMinting, setIsMinting] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>()

  const { startDate, endDate, isSoldOut, saleIsActive, saleNotStarted, saleIsFinished } =
    useSaleStatus({
      collection,
      presale,
    })

  const correctNetwork = useMemo(
    () => process.env.NEXT_PUBLIC_CHAIN_ID === activeChain?.id.toString(),
    [activeChain]
  )

  const countdownTooLarge = !isValidDate(new Date(endDate)) || new Date(endDate).getTime() > new Date().getTime() + 31536000000

  const handleMint = useCallback(async () => {
    setIsMinted(false)
    setAwaitingApproval(true)
    setErrors(undefined)
    try {
      const tx: ContractTransaction | undefined = presale
        ? await dropProvider.purchasePresale(mintCounter, allowlistEntry)
        : await dropProvider.purchase(mintCounter)
      console.log({ tx })
      setAwaitingApproval(false)
      setIsMinting(true)
      if (tx) {
        await tx.wait(2)
        setIsMinting(false)
        setIsMinted(true)
      } else {
        throw 'Error creating transaction! Please try again'
      }
    } catch (e: any) {
      setErrors(cleanErrors(e))
      setAwaitingApproval(false)
      setIsMinting(false)
    }
  }, [dropProvider, presale, setIsMinted, mintCounter, allowlistEntry])

  if (saleIsFinished || isSoldOut) {
    return (
      <Box>
        <Heading align="center" size="xs">
          {saleIsFinished ? 'Minting complete' : 'Sold out'}
        </Heading>
        <Paragraph
          mt="x1"
          align="center"
          size="sm"
          color="secondary"
          maxW="x64"
          mx="auto"
        >
          There may be NFTs for sale on the secondary&nbsp;market.
        </Paragraph>
        <Button
          as="a"
          href={`https://zora.co/collections/${collection.address}`}
          target="_blank"
          rel="noreferrer"
          size="lg"
          mt="x3"
        >
          View on Zora Marketplace
        </Button>
      </Box>
    )
  }

  return (
    <>
      <ConnectButton.Custom>
        {({ openChainModal, openConnectModal }) => (
          <Button
            icon={isMinted ? 'Check' : undefined}
            iconSize="sm"
            size="lg"
            variant={
              account == null
                ? 'primary'
                : !correctNetwork
                ? 'destructive'
                : saleNotStarted || availableMints < 1
                ? 'secondary'
                : 'primary'
            }
            onClick={
              !account ? openConnectModal : !correctNetwork ? openChainModal : handleMint
            }
            style={isMinted ? { backgroundColor: vars.color.positive } : {}}
            className={awaitingApproval ? waitingApproval : ''}
            disabled={
              isMinting ||
              awaitingApproval ||
              (account && correctNetwork && saleNotStarted) ||
              (account && correctNetwork && availableMints < 1)
            }
          >
            {isMinting ? (
              <SpinnerOG />
            ) : !account ? (
              'Connect wallet'
            ) : !correctNetwork ? (
              'Wrong network'
            ) : awaitingApproval ? (
              'Confirm in wallet'
            ) : isMinted ? (
              'Minted'
            ) : saleNotStarted ? (
              'Not started'
            ) : availableMints < 1 ? (
              'Mint limit reached'
            ) : (
              'Mint'
            )}
          </Button>
        )}
      </ConnectButton.Custom>
      {saleIsActive && !countdownTooLarge && (
        <Text variant="paragraph-sm" align="center" color="tertiary">
          <CountdownTimer targetTime={endDate} refresh={true} appendText=" left" />
        </Text>
      )}
      {saleNotStarted && (
        <Text variant="paragraph-sm" align="center" color="tertiary">
          <CountdownTimer
            targetTime={startDate}
            refresh={true}
            prependText="Starts in "
          />
        </Text>
      )}
      {errors && (
        <Text wordBreak="break-word" variant="paragraph-sm" style={{ color: 'red' }}>
          {errors}
        </Text>
      )}
    </>
  )
}

export function MintStatus({
  collection,
  presale = false,
  showPrice = true,
  allowlistEntry,
}: {
  collection: SubgraphERC721Drop
  presale?: boolean
  showPrice?: boolean
  allowlistEntry?: AllowListEntry
}) {
  const { userMintedCount, totalMinted, updateMintCounters } = useERC721DropContract()
  const { isSoldOut, saleIsActive, saleIsFinished } = useSaleStatus({
    collection,
    presale,
  })
  const maxPerWallet = parseInt(
    presale
      ? allowlistEntry?.maxCount || '0'
      : collection.salesConfig.maxSalePurchasePerAddress
  )
  const [isMinted, setIsMinted] = useState<boolean>(false)
  const [mintCounter, setMintCounter] = useState(1)
  const availableMints = maxPerWallet - (userMintedCount || 0)
  const internalPrice = allowlistEntry?.price || collection.salesConfig.publicSalePrice

  useEffect(() => {
    updateMintCounters()
  }, [updateMintCounters, isMinted])

  function handleMintCounterUpdate(value: any) {
    setMintCounter(value)
    setIsMinted(false)
  }

  const clampMintCounter = useCallback(() => {
    if (mintCounter > availableMints) setMintCounter(Math.max(1, availableMints))
    else if (mintCounter < 1) setMintCounter(1)
    else setMintCounter(Math.round(mintCounter))
  }, [mintCounter, availableMints])

  // TODO: handle integer overflows for when we do open mints
  const formattedMintedCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(totalMinted || parseInt(collection.totalMinted))

  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(parseInt(collection.maxSupply))

  const classname = useMemo(() => {
    let clsName = [`zord-mint-status`]
    presale && clsName.push(`zord-mint-status--presale`)
    return clsName
  }, [presale])


  return (
    <Stack gap="x4" className={classname}>
      {showPrice && !saleIsFinished && !isSoldOut && (
        <Flex gap="x3" flexChildren justify="space-between" align="flex-end" wrap="wrap">
          <Stack gap="x1" style={{ flex: 'none' }}>
            <Eyebrow>Price</Eyebrow>
            <Heading size="sm" className={priceDateHeading}>
              {internalPrice === '0'
                ? 'Free'
                : `${formatCryptoVal(Number(internalPrice) * (mintCounter || 1))} ETH`}
            </Heading>
          </Stack>

          {saleIsActive && !isSoldOut ? (
            <Stack gap="x1" style={{ textAlign: 'right' }}>
              <Flex className={"zord-mint-status__number-input"} gap="x2" ml="auto" justify="flex-end" align="center">
                <Button
                  w="x12"
                  variant="circle"
                  disabled={mintCounter <= 1}
                  onClick={() =>
                    handleMintCounterUpdate((state: number) =>
                      state > 0 ? state - 1 : state
                    )
                  }
                >
                  <Heading size="sm" className={priceDateHeading}>
                    –
                  </Heading>
                </Button>
                <Heading display="flex" size="sm" className={priceDateHeading}>
                  <input
                    type="number"
                    min={1}
                    placeholder="1"
                    value={mintCounter || ''}
                    onBlur={clampMintCounter}
                    onChange={(e) => handleMintCounterUpdate(Number(e.target.value))}
                    className={mintCounterInput}
                  />
                </Heading>
                <Button
                  w="x12"
                  disabled={mintCounter >= availableMints}
                  variant="circle"
                  onClick={() =>
                    setMintCounter((state) => (state < maxPerWallet ? state + 1 : state))
                  }
                >
                  <Heading size="sm" className={priceDateHeading}>
                    +
                  </Heading>
                </Button>
              </Flex>
            </Stack>
          ) : saleIsFinished ? (
            <Stack gap="x1" style={{ flex: 'none' }}>
              <Eyebrow>Sold</Eyebrow>
              <Heading size="sm" className={priceDateHeading}>
                {formattedMintedCount}
                {parseInt(collection.maxSupply) > OPEN_EDITION_SIZE ? (
                  ' NFTs'
                ) : (
                  <Box
                    display="inline"
                    color="tertiary"
                    style={{ lineHeight: 'inherit' }}
                  >
                    /{formattedTotalSupplyCount}
                  </Box>
                )}
              </Heading>
            </Stack>
          ) : null}
        </Flex>
      )}

      <SaleStatus
        collection={collection}
        mintCounter={mintCounter}
        isMinted={isMinted}
        presale={presale}
        setIsMinted={setIsMinted}
        allowlistEntry={allowlistEntry}
        availableMints={availableMints}
      />
    </Stack>
  )
}
