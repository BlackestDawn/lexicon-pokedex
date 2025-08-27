import CardGrid from "@/components/parts/cardGrid";
import PageNavigator from "@/components/parts/pageNavigator";
import { Suspense } from "react";
import LoadingSpinner from "@/components/sectors/loadingSpinner";
import { getPageFromAll } from "@/lib/queries/fetchData";
import { defaultPageStart, defaultPageLimit } from "@/lib/data/consts";

export default function AllPokemons({ searchParams }: { searchParams: { page?: string, limit?: string } }) {
  const page = searchParams.page ? parseInt(searchParams.page) : defaultPageStart;
  const limit = searchParams.limit ? parseInt(searchParams.limit) : defaultPageLimit;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AllPokemonsGrid page={page} limit={limit} />
    </Suspense>
  );
}

async function AllPokemonsGrid({ page, limit }: { page: number, limit: number }) {
  const result = await getPageFromAll(page, limit);
  const maxPages = Math.ceil(result.maxNum / limit);
  const cardsData = result.cardData;

  return (
    <>
      <div className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-jersey font-bold text-6xl text-center py-8">All Pokémons</h2>
        </div>
      </div>
      <div>
        <div className="max-w-5xl mx-auto flex justify-center p-3">
          <PageNavigator basePath={`/pokedex`} currentPage={page} maxPages={maxPages} />
        </div>
      </div>
      <div className=" bg-gradient-to-br [background-image:linear-gradient(-10deg,_#F3E4FA,_#EEF5FC)]">
        <div className="max-w-5xl mx-auto">
          <CardGrid cards={cardsData} />
        </div>
      </div>
    </>
  )
}