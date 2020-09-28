import gql from 'graphql-tag'

export const cities = gql`
  query {
    cities {
      name
      snippet
      slug
      featureImage {
        desktopUrl
        altText
        mobileUrl
      }
      attractions {
        title
        slug
        title
        metaDescription
        shortDescription
        city {
          slug
        }
        images {
          desktopUrl
          mobileUrl
          altText
        }
      }
    }
  }
`

export const citiesPage = gql`
  query {
    citiesPage {
      discoverCitiesBarHeader
      discoverCitiesBarDescription
      headerImage {
        desktopUrl
        altText
        mobileUrl
      }
    }
  }
`

export const cityBySlug = gql`
  query {
    cities(where: {
      slug: "niagara-falls-tours-canada"
    }){
      published
      name
      snippet
      slug
      shortDescription
      longDescription
      featureImage {
        desktopUrl
        altText
        mobileUrl
      }
      attractions {
        title
        slug
        snippet
        title
        metaDescription
        shortDescription
        city {
          slug
        }
        images {
          desktopUrl
          mobileUrl
          altText
        }
      }
      products {
        featureImage {
          desktopUrl
          mobileUrl
          altText
        }
        name
        slug
        snippet
      }
    }
  }
`

export const attractionBySlug = gql`
query {
  attractions(where: {
    slug: "skylon-tower"
  }){
    title
    slug
    snippet
    title
    metaDescription
    shortDescription
    city {
      slug
    }
    images {
      desktopUrl
      mobileUrl
      altText
    }
    relatedProducts {
      name
      featureImage {
        mobileUrl
        altText
        desktopUrl
      }
    }
  }
}
`