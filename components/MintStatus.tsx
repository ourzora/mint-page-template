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
import { useAccount, useBalance, useNetwork } from 'wagmi'
import { formatCryptoVal } from '@lib/numbers'
import { OPEN_EDITION_SIZE } from '@lib/constants'
import { intervalToDuration } from 'date-fns'
import { parseInt } from 'lodash'
import { waitingApproval } from 'styles/styles.css'

const CountdownTimer: React.FC<{
  targetTime: number
  refresh?: boolean
}> = ({ targetTime, refresh = false }) => {
  const date = useMemo(() => new Date(targetTime), [targetTime])
  const [now, setNow] = useState(new Date())

  if (refresh && date <= now) {
    location.reload()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  })

  const countdownText = useMemo(() => {
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: now,
      end: date,
    })

    return [
      days ? days + 'd' : '',
      hours + 'h',
      minutes + 'm',
      days && days > 0 ? '' : seconds + 's',
    ].join(' ')
  }, [date, now])

  return <>{countdownText}</>
}

const SaleStatus: React.FC<{
  collection: SubgraphERC721Drop
}> = ({ collection }) => {
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
      const tx: any = await dropProvider.purchase(1)
      console.log({ tx })
      setAwaitingApproval(false)
      setIsMinting(true)
      await tx.wait(1)
      setIsMinting(false)
      setIsMinted(true)
    } catch (e: any) {
      setErrors(e.message)
      setAwaitingApproval(false)
      setIsMinting(false)
    }
  }, [dropProvider])

  if (
    saleIsFinished ||
    parseInt(collection.totalMinted) >= parseInt(collection.maxSupply)
  ) {
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
      {/* TODO: Handle integer overflow for open editions */}
      <SaleProgressBar
        sold={parseInt(collection.totalMinted)}
        total={parseInt(collection.maxSupply)}
      />
      <ConnectButton.Custom>
        {({ openChainModal, openConnectModal }) => (
          <Button
            icon={isMinted ? 'Check' : ''}
            iconSize="sm"
            size="lg"
            variant={account == null ? null : !correctNetwork ? 'destructive' : null}
            onClick={
              account == null
                ? openConnectModal
                : !correctNetwork
                ? openChainModal
                : handleMint
            }
            loading={isMinting}
            style={{ backgroundColor: isMinted ? '#1CB687' : '' }}
            className={awaitingApproval ? waitingApproval : ''}
            disabled={isMinting || awaitingApproval || saleNotStarted}
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
        <Text align="center" size="sm" color="tertiary">
          <CountdownTimer
            targetTime={Number(collection.salesConfig.publicSaleEnd) * 1000}
            refresh={true}
          />{' '}
          left
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

export const MintStatus: React.FC<{
  collection: any
}> = ({ collection }) => {
  const dropProvider = useERC721DropContract()
  const { data: account } = useAccount()
  const { data: balance } = useBalance({
    addressOrName: collection.address,
  })

  const saleNotStarted =
    Number(collection.salesConfig.publicSaleStart) * 1000 > Date.now()

  // TODO: handle integer overflows for when we do open mints
  const formattedMintedCount = Intl.NumberFormat('en', {
    notation: 'compact',
  }).format(parseInt(collection.totalMinted))
  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'compact',
  }).format(parseInt(collection.maxSupply))

  return (
    <Well gap="x4" p="x5" style={{ width: '100%', height: 'max-content' }}>
      <Flex gap="x3" flexChildren justify="space-between" wrap="wrap">
        <Stack gap="x1" style={{ flex: 'none' }}>
          <Eyebrow>Price</Eyebrow>
          <Heading size="sm">
            {formatCryptoVal(collection.salesConfig.publicSalePrice)}&nbsp;ETH
          </Heading>
        </Stack>

        {saleNotStarted && collection.salesConfig.publicSaleStart.length < 16 ? (
          <Stack gap="x1" style={{ textAlign: 'right' }}>
            <Eyebrow>Starts</Eyebrow>
            <Heading size="sm">
              <CountdownTimer
                targetTime={Number(collection.salesConfig.publicSaleStart) * 1000}
                refresh={true}
              />
            </Heading>
          </Stack>
        ) : (
          <Stack gap="x1" style={{ textAlign: 'right' }}>
            <Eyebrow>Sold</Eyebrow>
            <Heading size="sm">
              {formattedMintedCount === 'NaN' ? '' : formattedMintedCount}
              {parseInt(collection.maxSupply) > OPEN_EDITION_SIZE ? (
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

const SaleProgressBar: React.FC<{ sold: number; total: number }> = ({ sold, total }) => {
  const progress = useMemo(
    () => Math.max(0, Math.min(100, (sold / total) * 100)),
    [sold, total]
  )

  return (
    <Box
      backgroundColor="secondary"
      style={{ height: 10 }}
      role="progressbar"
      aria-label="NFT sale progress"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={sold}
    >
      <Box
        style={{
          backgroundColor: 'black',
          height: 10,
          width: `${progress}%`,

          ...(progress < 100
            ? { clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0% 100%)' }
            : {}),
        }}
      />
    </Box>
  )
}
