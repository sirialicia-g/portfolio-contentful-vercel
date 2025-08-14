import { CONTACT_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extractContactEntries(fetchResponse) {
  return fetchResponse?.data?.contactCollection?.items;
}

export async function contactItems() {
  const items = await fetchGraphQL(
    `
    query {
      contactCollection {
        items {
          ${CONTACT_GRAPHQL_FIELDS}
        }
      }
    }`,
  );
  return extractContactEntries(items);
}
