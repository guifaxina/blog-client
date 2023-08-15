import { useQuery, gql } from '@apollo/client'

interface GetAuthor {
  getAuthor: {
    name: string,
    profilePic: string
  }
}

const GET_AUTHOR = gql`
  query getAuthor {
    getAuthor {
      profilePic
      name
    }
  }
`
export default function useGetAuthor() {
  return useQuery<GetAuthor>(GET_AUTHOR)
}
