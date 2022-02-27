import { useState } from 'react'
import { utils, BigNumber } from 'ethers'
import { Button } from '@components/Button'

export const MintButton = ({
  buttonText,
  isAwaitingApproval,
  mintPrice,
  maxQuantity,
  isMinting,
  onClick,
}) => {
  const [mintQuantity, setMintQuantity] = useState(1)
  const cost = utils.formatEther(BigNumber.from(mintPrice).mul(mintQuantity))

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
        {isAwaitingApproval ? (
          'Awaiting approval'
        ) : isMinting ? (
          'Minting...'
        ) : (
          <>
            {buttonText}{' '}
            <sub
              style={{
                fontSize: '80%',
                marginLeft: '0.2em',
                verticalAlign: 'baseline',
                opacity: '0.8',
              }}
            >
              ({cost} ETH)
            </sub>
          </>
        )}
      </Button>
    </>
  )
}
