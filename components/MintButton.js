import { useState } from 'react'
import { Button } from '@components/Button'

export const MintButton = ({
  buttonText,
  isAwaitingApproval,
  maxQuantity,
  isMinting,
  onClick,
}) => {
  const [mintQuantity, setMintQuantity] = useState(1)

  return (
    <>
      <input
        style={{ width: '3em', marginRight: '1em' }}
        type="number"
        value={mintQuantity}
        onChange={(e) => {
          setMintQuantity(Math.max(Math.min(Number(e.target.value), maxQuantity), 1))
        }}
      />
      <Button
        disabled={isAwaitingApproval || isMinting}
        onClick={() => onClick(mintQuantity)}
      >
        {isAwaitingApproval ? 'Awaiting approval' : isMinting ? 'Minting...' : buttonText}
      </Button>
    </>
  )
}
