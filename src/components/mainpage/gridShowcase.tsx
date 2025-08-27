import { Suspense } from "react";
import { getRandomIds } from "@/lib/queries/search";
import { getBasicInfoById } from "@/lib/queries/fetchData";
import BasicCard from "@/components/general/basicCard";
import { extractBasicCardData } from "@/lib/data/dataTransformation";
import LoadingSpinner from "@/components/general/loadingSpinner";

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
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="font-jersey font-bold text-4xl text-center pb-8">Featured Pokémon</h2>
      <div className="grid grid-cols-4 gap-4 auto-rows-fr">
        {extractBasicCardData(cardsData).map((card) => (
          <BasicCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
