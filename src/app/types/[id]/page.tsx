import TypesBanner from "@/components/details/typesBanner";
import LoadingSpinner from "@/components/sectors/loadingSpinner";
import { Suspense } from "react";
import { TypesPageProp } from "@/lib/interfaces/props";
import { notFound } from "next/navigation";
import CardGrid from "@/components/parts/cardGrid";
import { defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import { getPageByType } from "@/lib/queries/fetchData";
import PageNavigator from "@/components/parts/pageNavigator";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    page?: string;
    limit?: string;
  };
}

export default function TypesPageWrapper({ params, searchParams }: PageProps) {
  if (!params.id) notFound();

  const page = searchParams.page ? parseInt(searchParams.page) : defaultPageStart;
  const limit = searchParams.limit ? parseInt(searchParams.limit) : defaultPageLimit;
  const id = parseInt(params.id);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TypesPage type_id={id} page={page} limit={limit} />
    </Suspense>
  )
}

async function TypesPage({ type_id, page, limit }: TypesPageProp) {
  const result = await getPageByType(type_id, page, limit);
  const maxPages = Math.ceil(result.maxNum / limit);
  const cardsData = result.cardData;

  return (
    <>
      <div className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
        <div className="max-w-5xl mx-auto">
          <TypesBanner type_id={type_id} />
        </div>
      </div>
      <div>
        <div className="max-w-5xl mx-auto flex justify-center p-3">
          <PageNavigator basePath={`/types/${type_id}`} currentPage={page} maxPages={maxPages} />
        </div>
      </div>
      <div className=" bg-gradient-to-br [background-image:linear-gradient(-10deg,_#F3E4FA,_#EEF5FC)]">
        <div className="max-w-5xl mx-auto">
          <CardGrid cards={cardsData} />
        </div>
      </div>
    </>
  )
}
