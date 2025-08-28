import { Suspense } from "react";
import LoadingSpinner from "@/components/sectors/loadingSpinner";
import { ParamsIdProp } from "@/lib/interfaces/props";
import { notFound } from "next/navigation";
import DetailsPage from "@/components/sectors/details";
import ContentContainer from "@/components/sectors/contentContainer";

export default async function Page({ params }: ParamsIdProp) {
  const id = await params.id;
  if (!id) notFound();

  const idNum = parseInt(id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContentContainer type="strong">
        <DetailsPage id={idNum} />
      </ContentContainer>
    </Suspense>
  )
}
