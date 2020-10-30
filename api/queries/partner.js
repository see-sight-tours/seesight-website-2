import gql from 'graphql-tag'

export const partnersPage = gql`
{
  partnersPage {
    header 
    headerSubtext
    metaDescription
    headerImage {
      desktopUrl
      altText
      mobileUrl
    }
  }
}

`