import gql from 'graphql-tag'

export const homePage = gql`
  {
    homePage {
      homePageTitle
      homePageHeader
      homePageMetaDescription
      headerImage {
        desktopUrl
        mobileUrl
        altText
      }
    }
  }
`