import { Flex, FlexProps, Paragraph } from '@zoralabs/zord'
import Link from 'next/link'
import React, { Fragment, ReactNode } from 'react'
import { trailingArrow } from 'styles/styles.css'

interface CollectionDetailsItemProps extends FlexProps {
  name: string
  value?: string
  href?: string
  children?: ReactNode
}
export function CollectionDetailsItem({
  children,
  name,
  value,
  href,
  ...props
}: CollectionDetailsItemProps) {
  const Wrapper = href != null ? Link : (Fragment as any)

  return (
    <Wrapper {...(href != null ? { href, passHref: true } : {})}>
      <Flex
        as={href != null ? 'a' : undefined}
        gap="x3"
        align="center"
        justify="space-between"
        target="_blank"
        rel="noreferrer"
        aria-label="External link"
        {...props}
      >
        <Paragraph size="sm" color="tertiary">
          {name}
        </Paragraph>

        <Flex gap="x2" align="center">
          {!!value && !href && <Paragraph size="sm">{value}</Paragraph>}
          {!!href && (
            <Paragraph size="sm" className={trailingArrow}>
              {value || 'Explore'}
            </Paragraph>
          )}

          {children}
        </Flex>
      </Flex>
    </Wrapper>
  )
}
