import React, { ReactNode, useCallback, useState } from 'react'

interface IPFSProviderState {
  uploadFileToIPFS: (file: File) => number
  getIPFSHash: (id: number) => Promise<string> | null
  getIPFSCID: (id: number) => Promise<string> | null
  transformIPFSURL: (url: string) => string
}

export const IPFSContext = React.createContext<IPFSProviderState>({} as IPFSProviderState)

export const transformIPFSURL = (url: string) => {
  if (!url || url === 'imageURI/') {
    return '/assets/image/fallback.svg'
  }
  if (url.includes('ipfs://')) {
    return url
      .replace('ipfs://', `${process.env.NEXT_PUBLIC_IPFS_GATEWAY || 'https://zora-prod.mypinata.cloud' as string}/ipfs/`)
      .replace(/"/g, '') // Some test data contains wrapping strings
  }
  try {
    new URL(url)
  } catch (e: any) {
    return '/assets/image/fallback.svg'
  }
  // TODO: handle other ipfs formats as we find them
  return url
}

