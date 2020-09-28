import gql from 'graphql-tag'

export const products = gql`
  query {
    products {
      productType
      bokunStyleID
      bokunChannelUUID
      bokunWidgetNumber
      duration
      name
      reviewAverage
      slug
      featureImage {
          desktopUrl
      }
      carouselItems {
        desktopUrl
        mobileUrl
        altText
        MediaType
      }
      review {
        title
      }
      attractions {
        name
        slug
        title
        metaDescription
        snippet
        images {
          desktopUrl
          mobileUrl
          altText
        } 
        city {
          slug
        }
      }
      city {
        title
        slug
      }
      relatedProducts {
        featureImage {
          mobileUrl
          altText
          desktopUrl
        }
      }
      importantInfo
        questions {
          question
          answer
          published
          general
          date
        }
     }
  }
`

export const productBySlug = gql`
  query($slug: String) {
    products(where: {
      slug: $slug
    }) {
      productType
      duration
      name
      reviewAverage
      bokunStyleID
      bokunChannelUUID
      bokunWidgetNumber
      slug
      longDescription
      tourIncludes
      featureImage {
          desktopUrl
      }
      carouselItems {
        desktopUrl
        mobileUrl
        altText
        MediaType
      }
      review {
        title
      }
      attractions {
        name
        slug
        title
        metaDescription
        snippet
        images {
          desktopUrl
          mobileUrl
          altText
        } 
        city {
          slug
        }
      }
      city {
        title
        slug
      }
      relatedProducts {
        featureImage {
          mobileUrl
          altText
          desktopUrl
        }
      }
      importantInfo
      questions {
        question
        answer
        published
        general
        date
      }
      highlights
      itineraries {
        title
        snippet
        images {
          desktopUrl
          mobileUrl
          altText
        }
      }
     }
  }
`