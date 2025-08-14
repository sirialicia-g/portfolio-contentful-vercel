import { ARTICLE_GRAPHQL_FIELDS, ARTICLES_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extractPortfolioEntries(fetchResponse) {
  console.log(fetchResponse.data.portfolioPostCollection.items);
  return fetchResponse?.data?.portfolioPostCollection?.items;
}

export async function getAllArticles(limit = 7) {
  const articles = await fetchGraphQL(
    `query {
        portfolioPostCollection(where: {slug_exists: true}, order: date_DESC, limit: ${limit}) {
          items {
            ${ARTICLES_GRAPHQL_FIELDS}
          }
        }
      }`,
  );
  console.log("Från fetchen:", articles);
  return extractPortfolioEntries(articles);
}

export async function getArticle(slug, isDraftMode = false) {
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
