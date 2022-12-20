import React, { useMemo } from 'react'
import { Paragraph, Flex } from '@zoralabs/zord'

interface AudioTimeLabelsProps {
  currentTime: number
  totalTime: number
}

export const formatTime = (seconds: number) => {
  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')}`
}

export function AudioTimeLabels({ currentTime, totalTime }: AudioTimeLabelsProps) {
  const currentTimeFormatted = useMemo(() => formatTime(currentTime), [currentTime])
  const totalTimeFormatted = useMemo(() => formatTime(totalTime), [totalTime])

  if (totalTime === 0) return null

  return (
    <Flex
      display={{ '@initial': 'none', '@480': 'flex' }}
      pos="absolute"
      bottom="x0"
      w="100%"
      p="x2"
      justify="space-between"
      color="text3"
    >
      <Paragraph size="xs">{currentTimeFormatted}</Paragraph>
      <Paragraph size="xs">{totalTimeFormatted}</Paragraph>
    </Flex>
  )
}
