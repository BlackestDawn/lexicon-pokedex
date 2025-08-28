import ContentContainer from "@/components/sectors/contentContainer";
import LoadingSpinner from "@/components/sectors/loadingSpinner";
import { Suspense } from "react";
import { searchByName } from "@/lib/queries/search";
import SearchBox from "@/components/parts/searchbox";
import SearchResults from "@/components/parts/searchResult";
import type { SearchResult } from "@/lib/interfaces/responses";

interface SearchParams {
  searchParams: {
    query: string;
  }
}

export default async function SearchPageWrapper({ searchParams }: SearchParams) {
  const { query } = await searchParams;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SearchPage query={query} />
    </Suspense>
  )
}

async function SearchPage({ query }: { query: string}) {
  let results: SearchResult[] = [];
  if (query) results = await searchByName(query) as SearchResult[];

  return (
    <>
      <ContentContainer type="strong" className="py-8">
        <h2 className="font-jersey text-4xl font-bold text-center">Search Results</h2>
      </ContentContainer>
      <ContentContainer>
        <SearchBox />
      </ContentContainer>
      <ContentContainer type="weak" className="py-8">
        { query ? (
          <SearchResults result={results} />
        ) : (
          <p className="text-2xl font-bold text-center">No search term supplied.</p>
        )}
      </ContentContainer>
    </>
  );
}
