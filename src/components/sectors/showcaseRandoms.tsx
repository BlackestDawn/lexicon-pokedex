import { Suspense } from "react";
import { getRandomIds } from "@/lib/queries/search";
import CardGrid from "@/components/sectors/cardGrid";
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

  return (
    <CardGrid ids={ids} title="Featured Pokémon" />
  );
}
