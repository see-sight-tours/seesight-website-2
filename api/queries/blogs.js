import gql from 'graphql-tag'

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
      author
      content
      subTitle
      updatedAt
    }
  }`