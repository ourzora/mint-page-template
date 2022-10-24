import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import {
  Button,
  Flex,
  Box,
  Text,
  Stack,
  Paragraph,
  PopUp,
  Separator,
} from '@zoralabs/zord'
import { menuItem, hideMobile } from 'styles/styles.css'
import { Zorb } from 'components/Zorb'
import Link from 'next/link'
import { shortenAddress } from 'lib/helpers'
import { useDisconnect } from 'wagmi'

export const ConnectWallet = ({ connectText = 'Connect wallet', ...props }) => {
  const { disconnect } = useDisconnect()
  return (
    <RKConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        return (
          <>
            {(() => {
              if (!mounted) {
                return null
              }
              if (!mounted || !account || !chain) {
                return (
                  <Button size="sm" px="x4" onClick={openConnectModal} suppressHydrationWarning={true} {...props}>
                    {connectText}
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
                    {...props}
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
                  <PopUp
                    padding="x0"
                    placement="bottom-end"
                    trigger={
                      <Button
                        size="sm"
                        pill
                        variant="ghost"
                        type="button"
                        style={{ gap: 8, minWidth: 0 }}
                      >
                        <Zorb size={24} address={account.address} />
                        <Box as="span" className={hideMobile}>
                          {account.displayName}
                        </Box>
                      </Button>
                    }
                  >
                    <Stack gap="x0" style={{ minWidth: 180 }}>
                      <Link passHref href={"https://etherscan.io/address/"+account.address}>
                        <Button as="a" size="sm" variant="ghost" className={menuItem}>
                          <span>{account.displayName}</span>
                          <Paragraph size="sm" color="tertiary">
                            {shortenAddress(account.address)}
                          </Paragraph>
                        </Button>
                      </Link>
                      <Separator />
                      <Button
                        size="sm"
                        variant="ghost"
                        className={menuItem}
                        onClick={() => disconnect()}
                      >
                        Disconnect
                      </Button>
                    </Stack>
                  </PopUp>
                </Flex>
              )
            })()}
          </>
        )
      }}
    </RKConnectButton.Custom>
  )
}

