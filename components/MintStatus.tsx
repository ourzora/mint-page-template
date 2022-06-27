import { ConnectButton } from '@rainbow-me/rainbowkit'
import {
  Box,
  Well,
  Button,
  Eyebrow,
  Paragraph,
  Flex,
  Heading,
  Text,
  Stack,
} from '@zoralabs/zord'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { SubgraphERC721Drop } from 'models/subgraph'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { useAccount, useNetwork } from 'wagmi'
import { formatCryptoVal } from 'lib/numbers'
import { OPEN_EDITION_SIZE } from 'lib/constants'
import { intervalToDuration } from 'date-fns'
import { waitingApproval, priceDateHeading } from 'styles/styles.css'
import type { ContractTransaction } from 'ethers'

function isValidDate(date: Date) {
  return date instanceof Date && isFinite(date.getTime())
}

function useCountdown(
  end: number,
  { onElapse }: { onElapse?: () => void }
): { countdownText: string | null; countdownTooLarge: boolean } {
  const date = useMemo(() => new Date(end), [end])
  const [now, setNow] = useState(new Date())

  const countdownTooLarge = useMemo(
    () => !isValidDate(date) || date.getTime() > now.getTime() + 31536000000,
    [date, now]
  )

  const tick = useCallback(() => {
    setNow(new Date())

    const nextTick = setTimeout(() => {
      if (!countdownTooLarge) tick()
    }, 1000)

    return () => clearTimeout(nextTick)
  }, [countdownTooLarge])

  useEffect(() => {
    tick()
  }, [tick])

  useEffect(() => {
    if (onElapse && Number(date) <= Number(now)) {
      onElapse()
    }
  }, [onElapse, date, now])

  const duration = countdownTooLarge
    ? null
    : intervalToDuration({
        start: now,
        end: date,
      })

  const countdownText = useMemo(
    () =>
      duration
        ? [
            duration.days ? duration.days + 'd' : '',
            duration.hours + 'h',
            duration.minutes + 'm',
            duration.days && duration.days > 0 ? '' : duration.seconds + 's',
          ].join(' ')
        : null,
    [duration]
  )

  return { countdownText, countdownTooLarge }
}

function CountdownTimer({
  targetTime,
  refresh,
  hideLargeCountdown = true,
  appendText = '',
  prependText = '',
}: {
  targetTime: number
  refresh?: boolean
  hideLargeCountdown?: boolean
  appendText?: string
  prependText?: string
}) {
  const { countdownText, countdownTooLarge } = useCountdown(targetTime, {
    onElapse: refresh ? () => location.reload() : undefined,
  })

  return (
    <>
      {!countdownTooLarge
        ? prependText + countdownText + appendText
        : hideLargeCountdown
        ? ''
        : prependText + '> 1 year' + appendText}
    </>
  )
}

function SaleStatus({ collection }: { collection: SubgraphERC721Drop }) {
  const { data: account } = useAccount()
  const { activeChain } = useNetwork()
  const dropProvider = useERC721DropContract()
  const [awaitingApproval, setAwaitingApproval] = useState<boolean>(false)
  const [isMinting, setIsMinting] = useState<boolean>(false)
  const [isMinted, setIsMinted] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>()

  const correctNetwork = useMemo(
    () => process.env.NEXT_PUBLIC_CHAIN_ID === activeChain?.id.toString(),
    [activeChain]
  )

  const saleIsActive =
    Number(collection.salesConfig.publicSaleStart) * 1000 <= Date.now() &&
    Number(collection.salesConfig.publicSaleEnd) * 1000 > Date.now()

  const saleNotStarted =
    Number(collection.salesConfig.publicSaleStart) * 1000 > Date.now()
  const saleIsFinished = Number(collection.salesConfig.publicSaleEnd) * 1000 < Date.now()

  const handleMint = useCallback(async () => {
    setIsMinted(false)
    setAwaitingApproval(true)
    setErrors(undefined)
    try {
      const tx: ContractTransaction | undefined = await dropProvider.purchase(1)
      console.log({ tx })
      setAwaitingApproval(false)
      setIsMinting(true)
      if (tx) {
        await tx.wait(1)
        setIsMinting(false)
        setIsMinted(true)
      } else {
        throw 'Error creating transaction! Please try again'
      }
    } catch (e: any) {
      // Suppress error message if user rejected tx request (code 4001)
      if (e.code !== 4001) {
        setErrors(e.message)
      }
      setAwaitingApproval(false)
      setIsMinting(false)
    }
  }, [dropProvider])

  if (saleIsFinished || Number(collection.totalMinted) >= Number(collection.maxSupply)) {
    return (
      <>
        <Box style={{ borderTop: '2px solid #F2F2F2' }} />
        <Heading size="xs">{saleIsFinished ? 'Minting complete' : 'Sold out'}</Heading>
        <Paragraph color="secondary">
          There may be NFTs for sale on the secondary&nbsp;market.
        </Paragraph>
        <Button
          as="a"
          href={`https://zora.co/collections/${collection.address}`}
          target="_blank"
          size="lg"
        >
          View on Zora Marketplace
        </Button>
      </>
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
              account == null ? undefined : !correctNetwork ? 'destructive' : undefined
            }
            onClick={
              account == null
                ? openConnectModal
                : !correctNetwork
                ? openChainModal
                : handleMint
            }
            style={{ backgroundColor: isMinted ? '#1CB687' : '' }}
            className={awaitingApproval ? waitingApproval : ''}
            loading={isMinting}
            disabled={
              isMinting ||
              awaitingApproval ||
              (account && correctNetwork && saleNotStarted)
            }
          >
            {!isMinting &&
              (account == null
                ? 'Connect wallet'
                : !correctNetwork
                ? 'Wrong network'
                : awaitingApproval
                ? 'Confirm in wallet'
                : isMinted
                ? 'Minted'
                : saleNotStarted
                ? 'Not started'
                : 'Mint')}
          </Button>
        )}
      </ConnectButton.Custom>
      {saleIsActive && collection.salesConfig.publicSaleEnd.length < 16 && (
        <Text variant="paragraph-sm" align="center" color="tertiary">
          <CountdownTimer
            targetTime={Number(collection.salesConfig.publicSaleEnd) * 1000}
            refresh={true}
            appendText=" left"
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

export function MintStatus({ collection }: { collection: SubgraphERC721Drop }) {
  const saleNotStarted =
    Number(collection.salesConfig.publicSaleStart) * 1000 > Date.now()

  // TODO: handle integer overflows for when we do open mints
  const formattedMintedCount = Intl.NumberFormat('en', {
    notation: 'compact',
  }).format(Number(collection.totalMinted))
  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'compact',
  }).format(Number(collection.maxSupply))

  return (
    <Well gap="x4" p="x5" style={{ width: '100%', height: 'max-content' }}>
      <Flex gap="x3" flexChildren justify="space-between" wrap="wrap">
        <Stack gap="x1" style={{ flex: 'none' }}>
          <Eyebrow>Price</Eyebrow>
          <Heading size="sm" className={priceDateHeading}>
            {formatCryptoVal(collection.salesConfig.publicSalePrice)}&nbsp;ETH
          </Heading>
        </Stack>

        {saleNotStarted && collection.salesConfig.publicSaleStart.length < 14 ? (
          <Stack gap="x1" style={{ textAlign: 'right' }}>
            <Eyebrow>Starts</Eyebrow>
            <Heading size="sm" className={priceDateHeading}>
              <CountdownTimer
                targetTime={Number(collection.salesConfig.publicSaleStart) * 1000}
                refresh={true}
                hideLargeCountdown={false}
              />
            </Heading>
          </Stack>
        ) : (
          <Stack gap="x1" style={{ textAlign: 'right' }}>
            <Eyebrow>Sold</Eyebrow>
            <Heading size="sm" className={priceDateHeading}>
              {formattedMintedCount}
              {Number(collection.maxSupply) > OPEN_EDITION_SIZE ? (
                ' NFTs'
              ) : (
                <Box display="inline" color="tertiary" style={{ lineHeight: 'inherit' }}>
                  /{formattedTotalSupplyCount}
                </Box>
              )}
            </Heading>
          </Stack>
        )}
      </Flex>

      <SaleStatus collection={collection} />
    </Well>
  )
}
