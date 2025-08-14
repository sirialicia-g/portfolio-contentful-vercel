export const ARTICLE_GRAPHQL_FIELDS = `
      sys {
        id
      }
      title
      slug
      summary
      details {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              description
            }
          }
        }
      }
      date
      authorName
      categoryName
      portfolioImageCollection {
        items {
          url
          width
          height
        }
      }
      techTag
`;

export const ARTICLES_GRAPHQL_FIELDS = `
      sys {
        id
      }
      title
      slug
      summary
      details {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              url
              description
            }
          }
        }
      }
      portfolioThumbnail {
        url
        width
        height
      }
      techTag
`;

export const ABOUT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  aboutText {
  json
  }
  thumbnail {
  url
  width
  height
  }
`;

export const HOME_GRAPHQL_FIELDS = `
  sys {
    id
  }
  homeTitle
  homeInfo {
  json
  }
  homeThumbnail {
  url
  width
  height
  }
`;

export const CONTACT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  shortText
  contactInfo {
    json
  }
  thumbnail {
    url
    width
    height
  }
`;

export const NOTFOUND_GRAPHQL_FIELDS = `
  sys {
    id
  }
  deadEndTitle
  deadEndText
`;
