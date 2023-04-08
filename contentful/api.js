const DROP_FIELDS = `
slug
title
asset {
  url
}
background { 
  url
}
textColor
backgroundColor
titleColor
contractAddress
accentColor
`



async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
      process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}



function extractDrop(dropResponse){
  return dropResponse?.data?.dropCollection?.items?.[0]
}

function extractDrops(dropResponse) {
  return dropResponse?.data?.dropCollection?.items
}


export async function getAllDropsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      dropCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${DROP_FIELDS}
        }
      }
    }`
  )
  return extractDrops(entries)
}


export async function getAllDropsForHome(preview) {
  console.log('process.env.CONTENTFUL_SPACE_ID', process.env.CONTENTFUL_SPACE_ID);
  console.log('process.env.CONTENTFUL_ACCESS_TOKEN', process.env.CONTENTFUL_ACCESS_TOKEN);

  const entries = await fetchGraphQL(
    `query {
      dropCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${DROP_FIELDS}
        }
      }
    }`,
    preview
  )
  console.log('res', entries)
  return extractDrops(entries)
}


export async function getPreviewDropSlug(slug) {
  console.log('fetching drop')
  const entry = await fetchGraphQL(
    `query {
      dropCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${DROP_FIELDS}
        }
      }
    }`,
  )
  console.log(entry);
  const drop = extractDrop(entry)
  console.log(drop);

  return drop;
}

export async function getDropBySlug(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      dropCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${DROP_FIELDS}
        }
      }
    }`,
    preview
  )

  return {
    drop: extractDrop(entry),
  }
}
