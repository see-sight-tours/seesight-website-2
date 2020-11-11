import gql from 'graphql-tag'

export const blogPage = gql`
  {
    blogPage {
      headerTitle
      subHeader
      headerImage {
        desktopUrl
        altText
        mobileUrl
      }
    }
  }
`

export const blogs = gql`
  {
    blogs {
      title
      content 
      headerImage {
        mobileUrl
        desktopUrl
        altText
      }
      slug
      snippet
      subTitle
      createdAt
      updatedAt
      categories {
        title
      }
    }
  }
`


export const blogBySlug = gql`
  query($slug: String) {
    blogs(where: {
      slug: $slug
    }){
      id
      slug
      snippet
      headerImage {
        desktopUrl
        mobileUrl
        altText
      }
      categories {
        id
        title
        slug
      }
      relatedArticles {
        author
        updatedAt
        title
        author
        headerImage {
          desktopUrl
          mobileUrl
          altText
        }
      }
      relatedTours {
        title
        slug
        snippet
        name
        bokunStyleID
        bokunChannelUUID
        bokunWidgetNumber
        featureImages {
          desktopUrl
          mobileUrl
          altText
        }
      }
      author
      content
      subTitle
      updatedAt
    }
  }`

  export const categories = gql`
  {
    categories {
      title
    }
  }
  `