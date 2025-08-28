import Link from "next/link";
import { redirect } from "next/navigation";
import { SearchResult } from "@/lib/interfaces/responses";

export default function SearchResults({ result }: { result: SearchResult[] }) {
  if (result.length === 1) redirect(`/pokedex/${result[0].id}`);

  return (
    <>
      {result.length > 0 ? (
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-center mb-4">Multiple matches</h3>
          <div className="flex flex-wrap max-w-lg justify-center items-center gap-2 capitalize">
            {result.map((r) => (
              <Link
                key={r.id}
                href={`/pokedex/${r.id}`}
              >
                {r.name.replaceAll("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-2xl font-bold text-center">No matches found.</p>
      )}
    </>
  );
}
