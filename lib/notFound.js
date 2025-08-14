import { NOTFOUND_GRAPHQL_FIELDS } from "./queries";
import { fetchGraphQL } from "./api";

function extract404Entries(fetchResponse) {
  return fetchResponse?.data?.deadEndCollection?.items;
}
export async function get404Items() {
  const items = await fetchGraphQL(
    `query {
      deadEndCollection {
      items {
        ${NOTFOUND_GRAPHQL_FIELDS}
      }
      }
    }`,
  );
  console.log("queryn:", items);
  return extract404Entries(items);
}
