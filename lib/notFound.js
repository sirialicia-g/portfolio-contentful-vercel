import { NOTFOUND_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extract404Entries(fetchResponse) {
  return fetchResponse?.data?.deadEndCollection?.items;
}
export async function deadEndItems() {
  const items = await fetchGraphQL(
    `query {
      deadEndCollection {
      items {
        ${NOTFOUND_GRAPHQL_FIELDS}
      }
      }
    }`,
  );
  return extract404Entries(items);
}
