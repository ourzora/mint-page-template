import { MintButton } from './MintButton'
import { Box, Button, Eyebrow, Flex, Heading, Stack, StackProps } from '@zoralabs/zord'
import { OPEN_EDITION_SIZE } from 'constants/numbers'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { parseInt } from 'lodash'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'
import React, { useCallback, useState } from 'react'
import { mintCounterInput, priceDateHeading } from 'styles/styles.css'
import { AllowListEntry } from 'utils/merkle-proof'
import { formatCryptoVal } from 'utils/numbers'

interface MintComponentProps extends StackProps {
  collection: ERC721DropProviderState
  presale?: boolean
  showPrice?: boolean
  allowlistEntry?: AllowListEntry
}

export function MintComponent({
  className,
  collection,
  presale = false,
  showPrice = true,
  allowlistEntry,
  ...props
}: MintComponentProps) {
  const { userMintedCount, totalMinted } = collection
  const { isSoldOut, saleIsActive, saleIsFinished } = useSaleStatus({
    collection,
    presale,
  })
  const maxPerWallet = parseInt(
    presale
      ? allowlistEntry?.maxCanMint || '0'
      : collection.salesConfig.maxSalePurchasePerAddress.toString()
  )
  const [isMinted, setIsMinted] = useState<boolean>(false)
  const [mintCounter, setMintCounter] = useState(1)
  const availableMints = maxPerWallet - (userMintedCount || 0)
  const internalPrice = allowlistEntry?.price || collection.salesConfig.publicSalePrice
  const availableTokenCount = collection.maxSupply - totalMinted

  function handleMintCounterUpdate(value: any) {
    setMintCounter(value)
    setIsMinted(false)
  }

  const clampMintCounter = useCallback(() => {
    if (mintCounter > availableMints) setMintCounter(Math.max(1, availableMints))
    else if (mintCounter > availableTokenCount) setMintCounter(availableTokenCount)
    else if (mintCounter < 1) setMintCounter(1)
    else setMintCounter(Math.round(mintCounter))
  }, [mintCounter, availableTokenCount, availableMints])

  const formattedMintedCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(totalMinted)

  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(collection.maxSupply)

  return (
    <Stack
      className={[className, 'zord-mint-status', presale && 'zord-mint-status--presale']}
      gap="x4"
      {...props}
    >
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
              <Flex
                className={'zord-mint-status__number-input'}
                gap="x1"
                ml="auto"
                justify="flex-end"
                align="center"
              >
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
                    onChange={(e) => handleMintCounterUpdate(Number(e.target.value))}
                    onBlur={clampMintCounter}
                    className={mintCounterInput}
                  />
                </Heading>
                <Button
                  w="x12"
                  disabled={mintCounter >= Math.min(availableMints, availableTokenCount)}
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
                {collection.maxSupply > OPEN_EDITION_SIZE ? (
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

      <MintButton
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
