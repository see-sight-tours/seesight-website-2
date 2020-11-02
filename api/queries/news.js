import gql from 'graphql-tag'

export const newsPage = gql`
{
  newsPage {
    metaDescription
    title
    subTitle
    blurb
    blurbTitle
    headerImage {
      desktopUrl
      mobileUrl
      altText
    }
    articles {
      shortDescription
      articleUrl
      title
      date
    }
    pressReleases {
      title
      date
      author
      slug
      shortDescription
      longDescription
    }
  }
}
`

export const pressReleases = gql`
query {
  pressReleases {
    title
    date
    slug
    longDescription
    shortDescription
  }
}
`