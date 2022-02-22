import { Text } from '@components/primitives'

const Token = ({ tokens, errorMessage }) => {
  if (!tokens) {
    return 'Loading...'
  }

  if (errorMessage) {
    return <Text>404, token not found.</Text>
  }

  return (
    <>
      {tokens.map((token) => (
        <>
          <Text>ID: {token.id}</Text>
          <Text>data: {JSON.stringify(token.metadata)}</Text>
        </>
      ))}
    </>
  )
}

export async function getStaticPaths() {
  const paths = Array(0)
    .fill(0)
    .map((o, id) => ({
      params: { id: (id + 1).toString() },
    }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  let props = {
    id: params.id,
    tokens: [{ data: { image: '/images/sample/1.png' } }],
    errorMessage: false,
  }

  let tokens
  try {
    const ids = params.id.split(',')
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(
      `${baseUrl}/api/metadata/${ids.slice(0, 1)}...${ids.slice(-1)}`
    )
    let data = await res.json()
    if (!data.length) data = [data]
    props.tokens = data.map((data) => ({
      id: data.tokenId,
      metadata: data,
    }))
  } catch (e) {
    props.errorMessage = e.message
  }

  return {
    props,
    revalidate: 10,
  }
}

export default Token
