import { Suspense } from "react";
import { getRandomIds } from "@/lib/queries/search";
import { getBasicInfoById } from "@/lib/queries/fetchData";
import CardGrid from "@/components/parts/cardGrid";
import LoadingSpinner from "@/components/parts/loadingSpinner";

export default function ShowcaseRandoms() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ShowcaseGrid />
    </Suspense>
  );
}

async function ShowcaseGrid() {
  const ids = await getRandomIds(4);
  const cardsData = await getBasicInfoById(ids);

  return (
    <div>
      <h2 className="font-jersey font-bold text-4xl text-center py-8">Featured Pokémon</h2>
      <CardGrid cards={cardsData} />
    </div>
  );
}
