import TypesBanner from "@/components/typespage/typesBanner";
import LoadingSpinner from "@/components/general/loadingSpinner";
import { Suspense } from "react";

export default function TypesPageWrapper() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TypesPage />
    </Suspense>
  )
}


async function TypesPage() {
  return (
    <>
      <div className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
        <div className="max-w-5xl mx-auto">
          <TypesBanner />

          <div className="text-center py-4">
            <p>Here you can list all Pokémons by type.</p>
          </div>
        </div>
      </div>
    </>
  )
}
