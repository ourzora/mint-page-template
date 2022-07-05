const TokenPage = () => null
export default TokenPage
/*
import { Token } from '@components/Token'
import { baseUrl } from '@lib/constants'

const TokenPage = ({ tokens, errorMessage }) => {
  if (!tokens) {
    return <div>Loading...</div>
  }

  if (errorMessage) {
    return <div>404, token not found.</div>
  }

  return (
    <>
      {tokens.map((token, idx) => (
        <div key={idx}>
          <Token key={'token_' + idx} metadata={token} />
        </div>
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
 */
