import { CollectionDetailsItem } from './CollectionDetailsItem'
import { Label, Well } from '@zoralabs/zord'
import { NETWORK_NAME } from 'constants/addresses'
import { shortenAddress } from 'lib/helpers'
import { ERC721DropProviderState } from 'providers/ERC721DropProvider'
import { transformIPFSURL } from 'providers/IPFSProvider'
import React from 'react'

export function CollectionDetails({
  collection,
}: {
  collection: ERC721DropProviderState
}) {
  const shortAddress = shortenAddress(collection.address)

  return (
    <Well px="x5" py="x5" gap="x3">
      <Label size="md">Contract information</Label>

      <CollectionDetailsItem
        name="Contract Address"
        value={shortAddress}
        href={`https://${
          NETWORK_NAME ? NETWORK_NAME.toLowerCase() + '.' : ''
        }etherscan.io/token/${collection.address}`}
      />
      <CollectionDetailsItem name="Blockchain" value="Ethereum" />
      <CollectionDetailsItem name="Token standard" value="ERC-721" />
      {collection.editionMetadata?.animationURI && (
        <CollectionDetailsItem
          name="IPFS animationURI"
          href={transformIPFSURL(collection.editionMetadata?.animationURI)}
        />
      )}
      {collection.editionMetadata?.imageURI && (
        <CollectionDetailsItem
          name="IPFS imageURI"
          href={transformIPFSURL(collection.editionMetadata?.imageURI)}
        />
      )}
      <CollectionDetailsItem
        name="Etherscan transaction"
        href={`https://etherscan.io/tx/${collection.created.id}`}
      />
      <CollectionDetailsItem
        name="Resale royalty"
        value={`${collection.contractConfig?.royaltyBPS / 100}%`}
      />
    </Well>
  )
}
