import gql from 'graphql-tag'

export const questions = gql`
    query {
      questions {
        general
        id
        question
        answer
      }
    }
`