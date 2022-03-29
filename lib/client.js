import { ApolloClient, InMemoryCache } from '@apollo/client'
import { graphqlEndpoint } from '@lib/constants'

const client = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
})

export default client
