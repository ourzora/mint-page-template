import { Box, Button, Eyebrow, Flex, Heading, Stack } from '@zoralabs/zord'
import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { SubgraphERC721Drop } from 'models/subgraph'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { formatCryptoVal } from 'utils/numbers'
import { OPEN_EDITION_SIZE } from 'constants/numbers'
import { parseInt } from 'lodash'
import { priceDateHeading, mintCounterInput } from 'styles/styles.css'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { AllowListEntry } from 'utils/merkle-proof'
import { MintButton } from './MintButton'

export function MintComponent({
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
      ? allowlistEntry?.maxCanMint || '0'
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
              <Flex
                className={'zord-mint-status__number-input'}
                gap="x2"
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
