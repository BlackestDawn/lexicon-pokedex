import { Suspense } from "react";
import { getRandomIds } from "@/lib/queries/search";
import { getBasicInfoById } from "@/lib/queries/fetchData";
import CardGrid from "@/components/parts/cardGrid";
import LoadingSpinner from "@/components/sectors/loadingSpinner";

export default function ShowcaseRandoms() {
  return (
    <div className=" bg-gradient-to-br [background-image:linear-gradient(-10deg,_#F3E4FA,_#EEF5FC)]">
      <Suspense fallback={<LoadingSpinner />}>
        <ShowcaseGrid />
      </Suspense>
    </div>
  );
}

async function ShowcaseGrid() {
  const ids = await getRandomIds(4);
  const cardsData = await getBasicInfoById(ids);

  return (
    <section className="max-w-5xl mx-auto py-8">
      <h2 className="font-jersey font-bold text-4xl text-center pb-8">Featured Pokémon</h2>
      <CardGrid cards={cardsData} />
    </section>
  );
}
