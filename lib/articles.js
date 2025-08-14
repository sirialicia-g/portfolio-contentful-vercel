import { ARTICLE_GRAPHQL_FIELDS, ARTICLES_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extractPortfolioEntries(fetchResponse) {
  return fetchResponse?.data?.portfolioPostCollection?.items;
}

export async function allPortfolioArticles(limit = 7) {
  const articles = await fetchGraphQL(
    `query {
        portfolioPostCollection(where: {slug_exists: true}, order: date_DESC, limit: ${limit}) {
          items {
            ${ARTICLES_GRAPHQL_FIELDS}
          }
        }
      }`,
  );

  return extractPortfolioEntries(articles);
}

export async function specificArticle(slug, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        portfolioPostCollection(where: {slug: "${slug}"}, limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  );
  return extractPortfolioEntries(article)[0];
}
