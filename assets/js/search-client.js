const SearchClient = algoliasearch(
  "RVJ5ODNH9G",
  "176beb9e75ee8578ccc8292d41fc43aa"
);

export const Search = instantsearch({
  indexName: "wp_searchable_posts",
  searchClient: SearchClient
});
