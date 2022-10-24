import { SubgraphERC721Drop } from 'models/subgraph'

export function cleanEditionData(edition: SubgraphERC721Drop) {
  try {
    const { name } = JSON.parse(`{ "name": "${edition.name}" }`)

    return {
      ...edition,
      name,
      editionMetadata: {
        ...edition.editionMetadata,
        description: cleanDescription(edition.editionMetadata?.description),
      },
    }
  } catch (e) {
    return edition
  }
}

export function cleanDescription(descriptionStr: string) {
  const { description } = JSON.parse(`{ "description": "${descriptionStr}" }`)
  return description
}

