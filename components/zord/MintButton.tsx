import { useConnectModal, useChainModal } from '@rainbow-me/rainbowkit'
import { vars, Box, Button, Paragraph, Heading, Text, SpinnerOG } from '@zoralabs/zord'
import React, { useCallback, useState } from 'react'
import { SubgraphERC721Drop } from 'models/subgraph'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { useAccount, useNetwork } from 'wagmi'
import { waitingApproval } from 'styles/styles.css'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { CountdownTimer } from 'components/CountdownTimer'
import { cleanErrors } from 'utils/errors'
import { AllowListEntry } from 'utils/merkle-proof'
import type { ContractTransaction } from 'ethers'

export function MintButton({
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
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { openConnectModal } = useConnectModal()
  const { openChainModal } = useChainModal()
  const dropProvider = useERC721DropContract()
  const [awaitingApproval, setAwaitingApproval] = useState<boolean>(false)
  const [isMinting, setIsMinting] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>()

  const { startDate, endDate, isSoldOut, saleIsActive, saleNotStarted, saleIsFinished } =
    useSaleStatus({
      collection,
      presale,
    })

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
      <Button
        icon={isMinted ? 'Check' : undefined}
        iconSize="sm"
        size="lg"
        variant={
          !address
            ? undefined
            : chain?.unsupported
            ? 'destructive'
            : saleNotStarted || availableMints < 1
            ? 'secondary'
            : 'primary'
        }
        onClick={
          !address ? openConnectModal : chain?.unsupported ? openChainModal : handleMint
        }
        style={isMinted ? { backgroundColor: vars.color.positive } : {}}
        className={awaitingApproval ? waitingApproval : ''}
        disabled={
          isMinting ||
          awaitingApproval ||
          (!!address && !chain?.unsupported && saleNotStarted) ||
          (!!address && !chain?.unsupported && availableMints < 1)
        }
      >
        {isMinting ? (
          <SpinnerOG />
        ) : !address ? (
          'Connect wallet'
        ) : chain?.unsupported ? (
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
      {saleIsActive && (
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
