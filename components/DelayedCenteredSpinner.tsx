import { Flex, FlexProps, Spinner } from '@zoralabs/zord'
import React from 'react'

/**
 * A spinner that is centered and delayed by 800ms, to avoid flashing when loading is fast.
 */

interface DelayedCenteredSpinner extends FlexProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  delay?: number
}

export function DelayedCenteredSpinner({
  delay = 0.8,
  size = 'xl',
  ...props
}: DelayedCenteredSpinner) {
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      {...props}
    >
      <Spinner size={size} />
    </Flex>
  )
}
