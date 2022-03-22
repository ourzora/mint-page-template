import { Token } from '@components/Token'
import { TokenGrid } from '@components/Brand'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const TokenPage = ({ tokens, errorMessage }) => {
  if (!tokens) {
    return <TokenGrid>Loading...</TokenGrid>
  }

  if (errorMessage) {
    return <TokenGrid>404, token not found.</TokenGrid>
  }

  return (
    <>
      {tokens.map((token) => (
        <TokenGrid key={token.id}>
          {tokens.map((data) => (
            <Token metadata={token} key={data.tokenId} />
          ))}
        </TokenGrid>
      ))}
    </>
  )
}

export async function getStaticPaths() {
  const paths = []
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  let props = {
    id: params.id,
    tokens: [],
  }

  try {
    const res = await fetch(`${baseUrl}/api/metadata/${params.id}`)
    const data = await res.json()
    if (data.error) {
      throw new Error(data.error)
    } else {
      props.tokens = Array.isArray(data) ? data : [data]
    }
  } catch (e) {
    props.error = e.message
  }

  return {
    props,
    revalidate: 10,
  }
}

export default TokenPage
