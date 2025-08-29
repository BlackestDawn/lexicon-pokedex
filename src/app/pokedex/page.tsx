import CardGrid from "@/components/sectors/cardGrid";
import PageNavigator from "@/components/sectors/pageNavigator";
import { Suspense } from "react";
import LoadingSpinner from "@/components/parts/loadingSpinner";
import { getPageFromAll } from "@/lib/queries/fetchData";
import { defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import ContentContainer from "@/components/parts/contentContainer";
import MainHeader from "@/components/sectors/mainHeader";

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
      <MainHeader />
      <AllPokemonsGrid page={pageNum} limit={limitNum} />
    </Suspense>
  );
}

async function AllPokemonsGrid({ page, limit }: { page: number, limit: number }) {
  const result = await getPageFromAll(page, limit);
  const maxPages = Math.ceil(result.maxNum / limit);

  return (
    <>
      <ContentContainer className="flex justify-center p-3">
        <PageNavigator basePath={`/pokedex`} currentPage={page} maxPages={maxPages} />
      </ContentContainer>
      <ContentContainer type="weak" className="py-6">
        <CardGrid ids={result.ids} />
      </ContentContainer>
    </>
  )
}