import ContentContainer from "@/components/parts/contentContainer";
import SearchBox from "@/components/parts/searchbox";
import SearchResults from "@/components/parts/searchResult";
import MainHeader from "@/components/sectors/mainHeader";

interface PageProps {
  searchParams: Promise<{
    query: string;
  }>
}

export default async function SearchPageWrapper({ searchParams }: PageProps) {
  const { query } = await searchParams;

  return (
    <>
      <MainHeader />
      <ContentContainer>
        <SearchBox />
      </ContentContainer>
      <SearchResults query={query} />
    </>
  );
}
