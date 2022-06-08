import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { Button, Flex, Box, Text } from '@zoralabs/zord'
import { hideMobile } from 'styles/styles.css'
import { Zorb } from 'components/Zorb'

export const ConnectWallet = () => {
  return (
    <RKConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button size="sm" px="x4" onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                )
              }

              if (
                chain.unsupported ||
                String(chain.id) !== process.env.NEXT_PUBLIC_CHAIN_ID
              ) {
                return (
                  <Button
                    size="sm"
                    variant="destructive"
                    px="x4"
                    onClick={openChainModal}
                    style={{ gap: 4, gridGap: 4 }}
                  >
                    <Text
                      as="span"
                      variant="paragraph-lg"
                      style={{ lineHeight: 0, top: 1, position: 'relative' }}
                    >
                      &#x26A0;
                    </Text>{' '}
                    Wrong network
                  </Button>
                )
              }

              return (
                <Flex gap="x3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={openChainModal}
                    style={{ gap: 8, minWidth: 0 }}
                  >
                    {chain.hasIcon && (
                      <Box
                        w="x6"
                        h="x6"
                        overflow="hidden"
                        borderRadius="round"
                        mr="x0"
                        style={{
                          background: chain.iconBackground,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </Box>
                    )}
                    <Box as="span" className={hideMobile}>
                      {chain.name}
                    </Box>{' '}
                    &#x25BE;
                  </Button>

                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={openAccountModal}
                    type="button"
                    style={{ gap: 8, minWidth: 0 }}
                  >
                    <Zorb size={24} address={account.address} />
                    <Box as="span" className={hideMobile}>
                      {account.displayName}
                    </Box>{' '}
                    &#x25BE;
                  </Button>
                </Flex>
              )
            })()}
          </div>
        )
      }}
    </RKConnectButton.Custom>
  )
}
