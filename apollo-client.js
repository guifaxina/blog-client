import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  credentials: 'include'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

export default client