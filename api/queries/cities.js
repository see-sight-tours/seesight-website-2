import gql from 'graphql-tag'

export const cities = gql`
  query {
    cities {
      name
      snippet
      slug
      featureImages {
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
  query($slug: String) {
    cities(where: {
      slug: $slug
    }){
      published
      name
      snippet
      slug
      shortDescription
      longDescription
      featureImages {
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
        featureImages {
          desktopUrl
          mobileUrl
          altText
        }
        duration
        name
        slug
        snippet
      }
    }
  }
`

export const attractionBySlug = gql`
query($slug: String) {
  attractions(where: {
    slug: $slug
  }){
    title
    slug
    snippet
    title
    metaDescription
    shortDescription
    longDescription
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
      snippet
      duration
      slug
      featureImages {
        mobileUrl
        altText
        desktopUrl
      }
    }
  }
}
`