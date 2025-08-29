import { redirect } from "next/navigation";
import CardGrid from "@/components/sectors/cardGrid";
import { searchByName } from "@/lib/queries/search";

interface PageProps {
  query?: string;
}

export default async function SearchResults({ query }: PageProps) {
  let result: number[] = [];
  if (query) result = await searchByName(query);

  if (result.length === 1) redirect(`/pokedex/${result[0]}`);

  return (
    <>
      {result.length > 0 ? (
        <CardGrid ids={result} title={`Search results for "${query}"`} />
      ) : (
        <p className="text-2xl font-bold text-center pb-4">No matches found.</p>
      )}
    </>
  );
}
