import gql from 'graphql-tag'

export const contactPage = gql`
  {
    contactPage {
        header
        subText
        header_image {
          desktopUrl
          altText
          mobileUrl
      }
    }
  }
`