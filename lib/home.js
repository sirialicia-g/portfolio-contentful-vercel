import { HOME_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extractHomeEntries(fetchResponse) {
  return fetchResponse?.data?.homePageCollection?.items;
}

export async function getHomeItems() {
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
  console.log("Homequery", items);
  return extractHomeEntries(items);
}
