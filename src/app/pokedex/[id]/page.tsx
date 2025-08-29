import { Suspense } from "react";
import LoadingSpinner from "@/components/parts/loadingSpinner";
import { ParamsIdProp } from "@/lib/interfaces/props";
import { notFound } from "next/navigation";
import DetailsPage from "@/components/sectors/details";
import MainHeader from "@/components/sectors/mainHeader";

export default async function Page({ params }: ParamsIdProp) {
  const { id } = await params;
  if (!id) notFound();

  const idNum = parseInt(id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MainHeader />
      <DetailsPage id={idNum} />
    </Suspense>
  )
}
