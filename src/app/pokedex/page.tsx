import CardGrid from "@/components/parts/cardGrid";
import PageNavigator from "@/components/parts/pageNavigator";
import { Suspense } from "react";
import LoadingSpinner from "@/components/sectors/loadingSpinner";
import { getPageFromAll } from "@/lib/queries/fetchData";
import { defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import ContentContainer from "@/components/sectors/contentContainer";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}


export default async function AllPokemons({ searchParams }: PageProps) {
  const { page, limit } = await searchParams;
  const pageNum = page ? parseInt(page) : defaultPageStart;
  const limitNum = limit ? parseInt(limit) : defaultPageLimit;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AllPokemonsGrid page={pageNum} limit={limitNum} />
    </Suspense>
  );
}

async function AllPokemonsGrid({ page, limit }: { page: number, limit: number }) {
  const result = await getPageFromAll(page, limit);
  const maxPages = Math.ceil(result.maxNum / limit);
  const cardsData = result.cardData;

  return (
    <>
      <ContentContainer type="strong">
        <h2 className="font-jersey font-bold text-6xl text-center py-8">All Pokémons</h2>
      </ContentContainer>
      <ContentContainer className="flex justify-center p-3">
        <PageNavigator basePath={`/pokedex`} currentPage={page} maxPages={maxPages} />
      </ContentContainer>
      <ContentContainer type="weak">
        <CardGrid cards={cardsData} />
      </ContentContainer>
    </>
  )
}