import { ABOUT_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function exctractAboutEntries(fetchResponse) {
  return fetchResponse?.data?.aboutCollection?.items;
}
export async function getAboutItems() {
  const items = await fetchGraphQL(
    `query {
      aboutCollection {
      items {
        ${ABOUT_GRAPHQL_FIELDS}
      }
      }
    }`,
  );
  console.log("queryn:", items);
  return exctractAboutEntries(items);
}
