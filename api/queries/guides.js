import gql from 'graphql-tag'

export const guides = gql`
    query {        
      guides(sort: "order") {
        firstName
        lastName
        position
        biography
        published
        photos {
          desktopUrl
          altText
          mobileUrl
        }
        languages {
          name
        }
        location {
          slug
          name
          title
          snippet
        }
      }
    }
`

export const guidesPage = gql`
  query {
    guidesPage {
      subHeader
      header
      headerImage {
        desktopUrl
        mobileUrl
        altText
      }
    }
  }
`