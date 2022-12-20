import React from 'react'

export enum OldIconType {
  REMOVE = 'REMOVE',
  METAMASK = 'METAMASK',
  COINBASE_WALLET = 'COINBASE_WALLET',
  RAINBOW_WALLET = 'RAINBOW_WALLET',
  WALLETCONNECT = 'WALLETCONNECT',
  COPY = 'COPY',
  COPYRIGHT = 'COPYRIGHT',
  WARNING = 'WARNING',
  EMAIL = 'EMAIL',
  HELP = 'HELP',
  PLUG = 'PLUG',
  SHARE = 'SHARE',
  SETTINGS = 'SETTINGS',
  CHECK = 'CHECK',
  DOWN_ARROW = 'DOWN_ARROW',
  UP_ARROW = 'UP_ARROW',
  SOCIAL_SHARE = 'SOCIAL_SHARE',
  LOADING = 'LOADING',
  ACCEPT = 'ACCEPT',
  TRIANGLE_RIGHT = 'TRIANGLE_RIGHT',
  BACK_ARROW = 'BACK_ARROW',
  RIGHT_ARROW = 'RIGHT_ARROW',
  PAUSE = 'PAUSE',
  TRANSFER = 'TRANSFER',
  FILE = 'FILE',
  MONEY_BAG = 'MONEY_BAG',
  HAMMER = 'HAMMER',
  TAG = 'TAG',
  Z = 'Z',
  USER = 'USER',
  BUCKET = 'BUCKET',
  VERIFIED = 'VERIFIED',
  SEARCH = 'SEARCH',
  ARROW_TOP_RIGHT = 'ARROW_TOP_RIGHT',
}

interface OldIconProps {
  icon: OldIconType
  size?: number
  padding?: number
  reverse?: boolean
  style?: any
  [key: string]: any
}

const iconLookup = {
  [OldIconType.REMOVE]: '/assets/icon/remove.svg',
  [OldIconType.METAMASK]: '/assets/icon/metamask.png',
  [OldIconType.COINBASE_WALLET]: '/assets/icon/coinbaseWalletIcon.svg',
  [OldIconType.WALLETCONNECT]: '/assets/icon/walletconnect.png',
  [OldIconType.EMAIL]: '/assets/icon/email.svg',
  [OldIconType.HELP]: '/assets/icon/help.svg',
  [OldIconType.PLUG]: '/assets/icon/plug.svg',
  [OldIconType.SHARE]: '/assets/icon/share.svg',
  [OldIconType.SETTINGS]: '/assets/icon/settings.svg',
  [OldIconType.RAINBOW_WALLET]: '/assets/icon/rainbowWalletIcon.png',
  [OldIconType.CHECK]: '/assets/icon/check.svg',
  [OldIconType.DOWN_ARROW]: '/assets/icon/downArrow.svg',
  [OldIconType.UP_ARROW]: '/assets/icon/upArrow.svg',
  [OldIconType.SOCIAL_SHARE]: '/assets/icon/respond-arrow.svg',
  [OldIconType.LOADING]: '/assets/icon/loader.svg',
  [OldIconType.ACCEPT]: '/assets/icon/accept.svg',
  [OldIconType.TRIANGLE_RIGHT]: '/assets/icon/triangleRight.svg',
  [OldIconType.BACK_ARROW]: '/assets/icon/backArrow.svg',
  [OldIconType.RIGHT_ARROW]: '/assets/icon/rightArrow.svg',
  [OldIconType.PAUSE]: '/assets/icon/pause.svg',
  [OldIconType.TRANSFER]: '/assets/icon/transfer.svg',
  [OldIconType.FILE]: '/assets/icon/file.svg',
  [OldIconType.MONEY_BAG]: '/assets/icon/moneyBag.svg',
  [OldIconType.HAMMER]: '/assets/icon/hammer.svg',
  [OldIconType.TAG]: '/assets/icon/tag.svg',
  [OldIconType.Z]: '/assets/icon/oldZoraLogo.svg',
  [OldIconType.USER]: '/assets/icon/user.svg',
  [OldIconType.BUCKET]: '/assets/icon/bucket.svg',
  [OldIconType.VERIFIED]: '/assets/icon/verified.svg',
  [OldIconType.SEARCH]: '/assets/icon/search.svg',
  [OldIconType.ARROW_TOP_RIGHT]: '/assets/icon/arrow-top-right.svg',
  [OldIconType.COPY]: '/assets/icon/copy.svg',
  [OldIconType.COPYRIGHT]: '/assets/icon/copyright.svg',
  [OldIconType.WARNING]: '/assets/icon/warning.svg',
}

export function OldIcon({ icon, style, size = 16, ...props }: OldIconProps) {
  const src = iconLookup[icon]
  return (
    <img
      src={src}
      alt=""
      style={{
        ...style,
        width: `${size}px`,
        height: `${size}px`,
        transform: props.reverse ? `scaleX(-1)` : undefined,
        padding: props.padding,
      }}
      {...props}
    />
  )
}
