import Link from "next/link";
import { Suspense } from "react";
import { getRandomIds } from "@/lib/queries/search";
import { getBaseInfo } from "@/lib/queries/fetchData";
import BasicCard from "./basicCard";
import { extractBasicCardData } from "@/lib/data/dataTransformation";
import LoadingSpinner from "@/components/general/loadingSpinner";

export default function ShowcaseRandoms() {
  return (
    <div className=" bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
      <Suspense fallback={<LoadingSpinner />}>
        <ShowcaseGrid />
      </Suspense>
    </div>
  );
}

async function ShowcaseGrid() {
  const ids = await getRandomIds(4);
  const cardsData = await getBaseInfo(ids);

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="font-jersey font-bold text-4xl text-center pb-8">Featured Pokémon</h2>
      <div className="grid grid-cols-4 grid-template-rows-[auto_auto_1fr_1fr_auto] gap-4 ">
        {extractBasicCardData(cardsData).map((card) => (
          <Link
            key={card.id}
            href={`/pokemon/${card.id}`}
            className="grid grid-rows-subgrid row-span-5 gap-2 items-center border-5 border-blue-700 rounded-xl p-4 bg-green-50"
          >
            <BasicCard {...card} />
          </Link>
        ))}
      </div>
    </section>
  );
}
