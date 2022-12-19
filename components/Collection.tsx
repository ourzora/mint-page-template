import { SubgraphERC721Drop } from 'models/subgraph'
import { DROPS_METADATA_RENDERER } from 'constants/addresses'
import DropMetadataContractProvider from 'providers/DropMetadataProvider'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import EditionMetadataContractProvider from 'providers/EditionMetadataProvider'
import { CollectionInner } from './CollectionInner'

export function Collection({
  collection,
  username,
}: {
  collection: SubgraphERC721Drop
  username?: string
}) {

  const components = {
    drop: DropMetadataContractProvider,
    edition: EditionMetadataContractProvider,
  }
  const MetadataProvider =
    components[
      DROPS_METADATA_RENDERER.includes(collection.contractConfig?.metadataRenderer)
        ? 'drop'
        : 'edition'
    ]

  if (!collection) {
    return <div>Loading...</div>
  }

  return (
    <ERC721DropContractProvider collection={collection}>
      <MetadataProvider
        collection={collection}
        metadataRendererAddress={collection.contractConfig.metadataRenderer}
      >
        <CollectionInner username={username} />
      </MetadataProvider>
    </ERC721DropContractProvider>
  )
}
