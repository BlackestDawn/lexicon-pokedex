import TypesBanner from "@/components/parts/typesBanner";
import LoadingSpinner from "@/components/parts/loadingSpinner";
import { Suspense } from "react";
import { TypesPageProp } from "@/lib/interfaces/props";
import { notFound } from "next/navigation";
import CardGrid from "@/components/parts/cardGrid";
import { defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import { getPageByType } from "@/lib/queries/fetchData";
import PageNavigator from "@/components/parts/pageNavigator";
import ContentContainer from "@/components/sectors/contentContainer";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}

export default async function TypesPageWrapper(props: PageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;
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
      <ContentContainer type="strong">
        <TypesBanner type_id={type_id} />
      </ContentContainer>
      <ContentContainer className="flex justify-center p-3">
        <PageNavigator basePath={`/types/${type_id}`} currentPage={page} maxPages={maxPages} />
      </ContentContainer>
      <ContentContainer type="weak" className="py-6">
        <CardGrid cards={cardsData} />
      </ContentContainer>
    </>
  )
}
