import { Suspense } from "react";
import LoadingSpinner from "@/components/sectors/loadingSpinner";
import { ParamsIdProp } from "@/lib/interfaces/props";
import { notFound } from "next/navigation";
import DetailsPage from "@/components/sectors/details";

export default async function Page({ params }: ParamsIdProp) {
  const { id } = await params;
  if (!id) notFound();

  const idNum = parseInt(id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
        <div className="max-w-5xl mx-auto py-8">
          <DetailsPage id={idNum} />
        </div>
      </div>
    </Suspense>
  )
}