import { default as NextHead } from 'next/head'

const Head = ({ ogImage }) => {
  return (
    <NextHead>
      <title>WAYSPACE</title>
      <meta name="title" content="WAYSPACE" />
      <meta name="description" content="WAYSPACE by Jackintheway" />
      <meta name="og:title" content={`WAYSPACE`} />
      <meta name="og:url" content="https://wayspace.vercel.app/" />
      <meta name="og:description" content="WAYSPACE by Jackintheway" />
      <meta name="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="WAYSPACE" />
      <meta name="twitter:url" content="https://wayspace.vercel.app/" />
      <meta name="twitter:image" content={ogImage} />
    </NextHead>
  )
}

export default Head
