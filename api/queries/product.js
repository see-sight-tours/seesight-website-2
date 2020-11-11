import gql from 'graphql-tag'

export const products = gql`
  query {
    products(sort: "productOrder") {
      productType
      bokunStyleID
      bokunChannelUUID
      bokunWidgetNumber
      duration
      snippet
      name
      reviewAverage
      slug
      featureImages {
          desktopUrl
      }
      carouselItems {
        desktopUrl
        mobileUrl
        altText
        MediaType
      }
      reviews {
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
      cities {
        title
        slug
      }
      relatedProducts {
        featureImages {
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
    },
    limit: 10) {
      productType
      duration
      name
      reviewAverage
      snippet
      bokunStyleID
      bokunChannelUUID
      bokunWidgetNumber
      slug
      shortDescription
      longDescription
      tourIncludes
      featureImages {
          desktopUrl
      }
      carouselItems {
        desktopUrl
        mobileUrl
        altText
        MediaType
      }
      reviews {
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
      cities {
        title
        slug
      }
      relatedProducts {
        featureImages {
          mobileUrl
          altText
          desktopUrl
        }
        slug
        name
        duration
        snippet
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
      itineraries(sort: "step") {
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

export const productsByProductType = gql`
  query($productType: String)  {
    products(sort: "productOrder", where: {
      productType: $productType
    }) {
      productType
      bokunStyleID
      bokunChannelUUID
      bokunWidgetNumber
      duration
      snippet
      name
      reviewAverage
      slug
      featureImages {
          desktopUrl
      }
      carouselItems {
        desktopUrl
        mobileUrl
        altText
        MediaType
      }
      reviews {
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
      cities {
        title
        slug
      }
      relatedProducts {
        featureImages {
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