import { Box, Flex, Text, Stack, Icon } from '@zoralabs/zord'
import React, { useMemo, useState } from 'react'
import { SubgraphERC721Drop } from 'models/subgraph'
import { useERC721DropContract } from 'providers/ERC721DropProvider'
import { formatCryptoVal } from 'utils/numbers'
import { OPEN_EDITION_SIZE } from 'constants/numbers'
import { useSaleStatus } from 'hooks/useSaleStatus'
import { parseInt } from 'lodash'
import * as Collapsible from '@radix-ui/react-collapsible'
import { dateOptions } from 'constants/dates'
import { collapsibleContent } from 'styles/styles.css'
import { useAllowlistEntry } from 'hooks/useAllowlistEntry'
import { useAccount } from 'wagmi'

export function MintDetails({
  collection,
  showToggle = true,
}: {
  collection: SubgraphERC721Drop
  showToggle?: boolean
}) {
  const { address } = useAccount()
  const { allowlistEntry } = useAllowlistEntry({
    merkleRoot: collection.salesConfig?.presaleMerkleRoot.toString(),
    address,
  })

  const { totalMinted } = useERC721DropContract()
  const { presaleExists, saleIsFinished, isSoldOut } = useSaleStatus({ collection })
  const maxPerWallet = parseInt(collection.salesConfig.maxSalePurchasePerAddress)
  const [opened, setOpened] = useState(false)

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
  }).format(totalMinted || parseInt(collection.totalMinted))

  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(parseInt(collection.maxSupply))

  return (
    <Stack gap="x4">
      <Collapsible.Root
        defaultOpen={!showToggle}
        onOpenChange={(value) => setOpened(value)}
      >
        <Stack className="zord-mint-details" gap="x3">
          <Flex className="zord-mint-details__item" gap="x3" justify="space-between">
            <Text variant="paragraph-sm" color="tertiary">
              Number minted
            </Text>
            <Text variant="paragraph-sm">
              {formattedMintedCount}
              {parseInt(collection.maxSupply) > OPEN_EDITION_SIZE ? (
                ' NFTs'
              ) : (
                <Box display="inline" color="tertiary">
                  /{formattedTotalSupplyCount}
                </Box>
              )}
            </Text>
          </Flex>
          {maxPerWallet < OPEN_EDITION_SIZE && (
            <Flex className="zord-mint-details__item" gap="x2" justify="space-between">
              <Text variant="paragraph-sm" color="tertiary">
                Max per address
              </Text>
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
            </Flex>
          )}
          <Box>
            <Collapsible.Content className={collapsibleContent}>
              <Stack gap="x3">
                {(saleIsFinished || isSoldOut) && (
                  <Flex
                    className="zord-mint-details__item"
                    gap="x2"
                    justify="space-between"
                  >
                    <Text variant="paragraph-sm" color="tertiary">
                      Mint price
                    </Text>
                    <Text variant="paragraph-sm">
                      {collection.salesConfig.publicSalePrice === '0'
                        ? 'Free'
                        : `${formatCryptoVal(
                            collection.salesConfig.publicSalePrice
                          )} ETH`}
                    </Text>
                  </Flex>
                )}
                {presaleExists && (
                  <>
                    <Flex
                      className="zord-mint-details__item"
                      gap="x2"
                      justify="space-between"
                    >
                      <Text variant="paragraph-sm" color="tertiary">
                        Presale start
                      </Text>
                      <Text variant="paragraph-sm" align="right">
                        {presaleStartDate.toLocaleString(...dateOptions)}
                      </Text>
                    </Flex>
                    {!isNaN(presaleEndDate.getTime()) && (
                      <Flex
                        className="zord-mint-details__item"
                        gap="x2"
                        justify="space-between"
                      >
                        <Text variant="paragraph-sm" color="tertiary">
                          Presale end
                        </Text>
                        <Text variant="paragraph-sm" align="right">
                          {presaleEndDate.toLocaleString(...dateOptions)}
                        </Text>
                      </Flex>
                    )}
                  </>
                )}
                <Flex
                  className="zord-mint-details__item"
                  gap="x2"
                  justify="space-between"
                >
                  <Text variant="paragraph-sm" color="tertiary">
                    Public sale start
                  </Text>
                  <Text variant="paragraph-sm" align="right">
                    {startDate.toLocaleString(
                      ...(dateOptions as [string, Intl.DateTimeFormatOptions])
                    )}
                  </Text>
                </Flex>
                {!isNaN(endDate.getTime()) && (
                  <Flex
                    className="zord-mint-details__item"
                    gap="x2"
                    justify="space-between"
                  >
                    <Text variant="paragraph-sm" color="tertiary">
                      Public sale end
                    </Text>
                    <Text variant="paragraph-sm" align="right">
                      {endDate.toLocaleString(...dateOptions)}
                    </Text>
                  </Flex>
                )}
              </Stack>
            </Collapsible.Content>
            {showToggle && (
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
