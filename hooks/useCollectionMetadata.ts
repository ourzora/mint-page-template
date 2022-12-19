import { DROPS_METADATA_RENDERER, LowercaseAddress } from 'constants/addresses'
import { useDropMetadataContract } from 'providers/DropMetadataProvider'
import { useEditionMetadataContract } from 'providers/EditionMetadataProvider'

export const useCollectionMetadata = (metadataRendererAddress: LowercaseAddress) => {
  const drop = useDropMetadataContract()
  const edition = useEditionMetadataContract()

  if (DROPS_METADATA_RENDERER.includes(metadataRendererAddress)) {
    return {
      type: 'drop' as const,
      metadata: drop,
    }
  } else {
    return {
      type: 'edition' as const,
      metadata: edition,
    }
  }
}
