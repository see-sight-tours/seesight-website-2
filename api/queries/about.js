import gql from 'graphql-tag'

export const aboutPage = gql`
  {
    aboutPage {
      header
      imageSubtitle
      imageHeader {
        desktopUrl
        altText
        mobileUrl
      }
    }
  }
`