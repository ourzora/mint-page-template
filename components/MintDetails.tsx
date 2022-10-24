import { CollectionDetailsItem } from './CollectionDetails/CollectionDetailsItem'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Box, Flex, Icon, Paragraph, Stack, StackProps, Text } from '@zoralabs/zord'
import { dateOptions } from 'constants/dates'
import { OPEN_EDITION_SIZE } from 'constants/numbers'
import { useAllowlistEntry } from 'hooks/useAllowlistEntry'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'
import React, { useMemo, useState } from 'react'
import { collapsibleContent } from 'styles/styles.css'
import { formatCryptoVal } from 'utils/numbers'
import { useAccount } from 'wagmi'

interface MintDetailsProps extends StackProps {
  collection: ERC721DropProviderState
  hideToggle?: boolean
  initialOpen?: boolean
}

export function MintDetails({
  collection,
  hideToggle,
  initialOpen = false,
  ...props
}: MintDetailsProps) {
  const { address } = useAccount()
  const { allowlistEntry } = useAllowlistEntry({
    merkleRoot: collection.salesConfig?.presaleMerkleRoot.toString(),
    address,
  })

  const { totalMinted } = collection
  const { presaleExists, merkleRootExists, saleIsFinished, isSoldOut } = useSaleStatus({
    collection,
  })
  const maxPerWallet = Number(collection.salesConfig.maxSalePurchasePerAddress)
  const [opened, setOpened] = useState(initialOpen)

  const startDate = useMemo(
    () => new Date(Number(collection.salesConfig.publicSaleStart) * 1000),
    [collection.salesConfig.publicSaleStart]
  )
  const endDate = useMemo(
    () => new Date(Number(collection.salesConfig.publicSaleEnd) * 1000),
    [collection.salesConfig.publicSaleEnd]
  )

  const presaleStartDate = useMemo(
    () => new Date(Number(collection.salesConfig.presaleStart) * 1000),
    [collection.salesConfig.presaleStart]
  )
  const presaleEndDate = useMemo(
    () => new Date(Number(collection.salesConfig.presaleEnd) * 1000),
    [collection.salesConfig.presaleEnd]
  )

  // TODO: handle integer overflows for when we do open mints
  const formattedMintedCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(totalMinted || collection.totalMinted)

  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(collection.maxSupply)

  return (
    <Stack gap="x4" {...props}>
      <Collapsible.Root
        defaultOpen={hideToggle}
        onOpenChange={(value) => setOpened(value)}
      >
        <Stack className="zord-mint-details" gap="x3">
          <CollectionDetailsItem className="zord-mint-details__item" name="Number minted">
            <Paragraph size="sm">
              {formattedMintedCount}
              {collection.maxSupply > OPEN_EDITION_SIZE ? (
                ' NFTs'
              ) : (
                <Paragraph as="span" size="sm" color="tertiary">
                  /{formattedTotalSupplyCount}
                </Paragraph>
              )}
            </Paragraph>
          </CollectionDetailsItem>

          {maxPerWallet < OPEN_EDITION_SIZE && (
            <CollectionDetailsItem
              className="zord-mint-details__item"
              name="Max per address"
            >
              <Text variant="paragraph-sm">
                {/*userMintedCount && maxPerWallet < OPEN_EDITION_SIZE && (
                <Box display="inline" color="tertiary">
                  {userMintedCount}/
                </Box>
              )*/}
                {allowlistEntry &&
                  `Presale: ${allowlistEntry.maxCanMint} / Public sale: `}
                {maxPerWallet}
              </Text>
            </CollectionDetailsItem>
          )}

          <Box>
            <Collapsible.Content className={collapsibleContent}>
              <Stack gap="x3">
                {!!(saleIsFinished || isSoldOut) && (
                  <CollectionDetailsItem
                    className="zord-mint-details__item"
                    name="Mint price"
                    value={
                      collection.salesConfig.publicSalePrice === '0'
                        ? 'Free'
                        : `${formatCryptoVal(collection.salesConfig.publicSalePrice)} ETH`
                    }
                  />
                )}

                {presaleExists && merkleRootExists && (
                  <>
                    <CollectionDetailsItem
                      className="zord-mint-details__item"
                      name="Presale start"
                      value={presaleStartDate.toLocaleString(...dateOptions)}
                    />

                    {!isNaN(presaleEndDate.getTime()) && (
                      <CollectionDetailsItem
                        className="zord-mint-details__item"
                        name="Presale end"
                        value={presaleEndDate.toLocaleString(...dateOptions)}
                      />
                    )}
                  </>
                )}

                <CollectionDetailsItem
                  className="zord-mint-details__item"
                  name="Public sale start"
                  value={startDate.toLocaleString(
                    ...(dateOptions as [string, Intl.DateTimeFormatOptions])
                  )}
                />

                {!isNaN(endDate.getTime()) && (
                  <CollectionDetailsItem
                    className="zord-mint-details__item"
                    name="Public sale end"
                    value={endDate.toLocaleString(...dateOptions)}
                  />
                )}
              </Stack>
            </Collapsible.Content>

            {!hideToggle && (
              <Collapsible.Trigger asChild={true}>
                <Flex
                  className="zord-mint-details__trigger"
                  cursor="pointer"
                  mt="x2"
                  gap="x2"
                  mx="auto"
                  align="center"
                  justify="center"
                >
                  <Text variant="label-sm">Details</Text>
                  <Icon id="ChevronDown" color="tertiary" flip={opened} />
                </Flex>
              </Collapsible.Trigger>
            )}
          </Box>
        </Stack>
      </Collapsible.Root>
    </Stack>
  )
}
