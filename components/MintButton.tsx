import { useChainModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { Box, Button, Heading, Paragraph, Text, vars } from '@zoralabs/zord'
import { CountdownTimer } from 'components/CountdownTimer'
import type { ContractTransaction } from 'ethers'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'
import React, { useCallback, useState } from 'react'
import { waitingApproval } from 'styles/styles.css'
import { cleanErrors } from 'utils/errors'
import { AllowListEntry } from 'utils/merkle-proof'
import { useAccount, useNetwork } from 'wagmi'

export function MintButton({
  collection,
  isMinted,
  setIsMinted,
  presale,
  mintCounter = 1,
  availableMints,
  allowlistEntry,
}: {
  collection: ERC721DropProviderState
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
  const { updateMintCounters } = collection
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
        ? await collection.purchasePresale(mintCounter, allowlistEntry)
        : await collection.purchase(mintCounter)
      console.log({ tx })
      setAwaitingApproval(false)
      setIsMinting(true)
      if (tx) {
        await tx.wait(2)
        updateMintCounters()
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
  }, [collection, presale, setIsMinted, mintCounter, allowlistEntry])

  if (saleIsFinished || isSoldOut) {
    return (
      <Box>
        <Heading textAlign="center" size="xs">
          {saleIsFinished ? 'Minting complete' : 'Sold out'}
        </Heading>
        <Paragraph
          mt="x1"
          textAlign="center"
          size="sm"
          color="secondary"
          maxW="x64"
          mx="auto"
        >
          There may be NFTs for sale on the secondary&nbsp;market.
        </Paragraph>
        <Button
          as="a"
          href={`https://opensea.io/assets?search[query]=${collection.address}`}
          target="_blank"
          rel="noreferrer"
          size="lg"
          my="x3"
        >
          View on Opensea
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
        style={
          isMinted
            ? { backgroundColor: vars.color.positive, color: vars.color.onPositive }
            : {}
        }
        className={awaitingApproval ? waitingApproval : ''}
        disabled={
          isMinting ||
          awaitingApproval ||
          (!!address && !chain?.unsupported && saleNotStarted) ||
          (!!address && !chain?.unsupported && availableMints < 1 && !isMinted)
        }
        loading={isMinting}
        suppressHydrationWarning={true}
      >
        {!address
          ? 'Connect wallet'
          : chain?.unsupported
          ? 'Wrong network'
          : awaitingApproval
          ? 'Confirm in wallet'
          : isMinted
          ? 'Minted'
          : saleNotStarted
          ? 'Not started'
          : availableMints < 1
          ? 'Mint limit reached'
          : 'Mint'}
      </Button>
      {saleIsActive && (
        <Text variant="paragraph-sm" textAlign="center" color="tertiary">
          <CountdownTimer targetTime={endDate} refresh={true} appendText=" left" />
        </Text>
      )}
      {saleNotStarted && (
        <Text variant="paragraph-sm" textAlign="center" color="tertiary">
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
