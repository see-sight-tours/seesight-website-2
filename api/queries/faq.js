import gql from 'graphql-tag'

export const questions = gql`
    query {
      questions {
        id
        question
        answer
      }
    }
`