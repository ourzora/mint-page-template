import { useSaleStatus } from '@hooks/useSaleStatus'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button, SpinnerOG } from '@zoralabs/zord'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { useCallback, useState } from 'react'
import { useAccount, useNetwork } from 'wagmi'
import { waitingApproval } from 'styles/styles.css'
import { cleanErrors } from 'lib/errors'

const MintButton = ({
  isMinted,
  collection,
  availableMints,
  mintCounter,
  allowlistEntry,
  setIsMinted,
  setErrors,
  isSecond,
}) => {
  console.log('collection', collection)
  const presale = false
  const { switchNetwork } = useNetwork()
  const { data: account } = useAccount()
  const { chainId, correctNetwork, purchaseTrack, purchase } = useERC721DropContract()
  const { saleNotStarted } = useSaleStatus({
    collection,
    presale,
  })
  const [awaitingApproval, setAwaitingApproval] = useState(false)
  const [isMinting, setIsMinting] = useState(false)

  const handleMint = useCallback(async () => {
    setIsMinted(false)
    setAwaitingApproval(true)
    setErrors(undefined)
    try {
      const tx = await purchaseTrack(mintCounter, collection.editionMetadata.trackNumber)
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
    } catch (e) {
      setErrors(cleanErrors(e))
      setAwaitingApproval(false)
      setIsMinting(false)
    }
  }, [mintCounter, allowlistEntry, isSecond, purchase, purchaseTrack])

  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => (
        <Button
          icon={isMinted ? 'Check' : undefined}
          iconSize="sm"
          size="lg"
          variant={
            account == null
              ? undefined
              : !correctNetwork
              ? 'destructive'
              : saleNotStarted || availableMints < 1
              ? 'secondary'
              : undefined
          }
          onClick={
            !account
              ? openConnectModal
              : !correctNetwork
              ? () => switchNetwork?.(chainId)
              : handleMint
          }
          style={isMinted ? { backgroundColor: '#1CB687' } : {}}
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
  )
}

export default MintButton
