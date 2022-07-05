export {}
/*
import { useMemo } from 'react'
import { Button } from '@components/Button'
import { useAccount } from 'wagmi'
import { useAllowlist } from '@hooks/useAllowlist'
import { Box, Text } from '@components/primitives'

export const AllowlistCheck = ({}) => {
  // HOOKS
  const { data: accountData } = useAccount()
  const [
    {
      allowlistProof,
      allowlistRoot,
      allowlistIndex,
      allowlistChecked,
      allowlistVerified,
    },
    checkAllowlist,
  ] = useAllowlist()

  // Check allowlist after account has been connected
  useMemo(() => {
    return accountData?.address && checkAllowlist(accountData.address)
  }, [, accountData && accountData.address])

  if (!accountData) return null

  return (
    <>
      {allowlistChecked &&
        (allowlistIndex > -1 && allowlistVerified ? (
          <>
            <Text>Merkle tree root: 0x{allowlistRoot}</Text>
            <Button css={{ cursor: 'text' }}>
              Congratulations! You are on the presale list!
            </Button>
            <br />
            <br />
            <Text>
              You will be able to purchase directly through the website once the presale
              goes live.
              <br />
              If you would prefer, the following data can be used to mint directly from
              the contract during the presale.
            </Text>
            <Box css={{ padding: '$margin', background: '#eee' }}>
              <Text css={{ textAlign: 'left', wordBreak: 'break-all' }}>
                Index: {allowlistIndex}
                <br />
                Proof: {JSON.stringify(allowlistProof).replace(/"/g, '')}
              </Text>
            </Box>
          </>
        ) : (
          <>
            <Text>Sorry, you are not on the allowlist this time :(</Text>
            <Text>
              You will be able to mint directly through the website once the public sale
              goes live.
            </Text>
          </>
        ))}
      <hr />
    </>
  )
}
 */
