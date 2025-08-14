import { HOME_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extractHomeEntries(fetchResponse) {
  return fetchResponse?.data?.homePageCollection?.items;
}

export async function homeItems() {
  const items = await fetchGraphQL(
    `
    query {
      homePageCollection {
        items {
          ${HOME_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractHomeEntries(items);
}
