import { useMutation, gql } from "@apollo/client";

export default function useCreateAuthor() {
  const CREATE_AUTHOR = gql`
    mutation CreateAuthor($type: CreateAuthorInput!) {
      createAuthor(input: $type) {
        id
      }
    }
  `;
  const [createAuthor, { data, loading, error }] = useMutation(CREATE_AUTHOR);

  return { createAuthor, data, loading, error };
}
