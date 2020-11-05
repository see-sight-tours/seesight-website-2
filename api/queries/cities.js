import gql from 'graphql-tag'

export const cities = gql`
  query {
    cities(sort: "order") {
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
      alternativeTitle
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
        productType
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
    whatToBring
    expertTips
    hourOfOperation
    city {
      slug
    }
    images {
      desktopUrl
      mobileUrl
      altText
    }
    products {
      name
      snippet
      duration
      slug
      productType
      featureImages {
        mobileUrl
        altText
        desktopUrl
      }
    }
    questions {
      question
      answer
    }
  }
}
`