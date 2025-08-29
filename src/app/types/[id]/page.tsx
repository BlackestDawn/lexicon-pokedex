import TypesBanner from "@/components/sectors/typesBanner";
import LoadingSpinner from "@/components/parts/loadingSpinner";
import { Suspense } from "react";
import { TypesPageProp } from "@/lib/interfaces/props";
import { notFound } from "next/navigation";
import CardGrid from "@/components/sectors/cardGrid";
import { defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import { getPageByType } from "@/lib/queries/fetchData";
import PageNavigator from "@/components/sectors/pageNavigator";

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

  return (
    <>
      <TypesBanner type_id={type_id} />
      <PageNavigator basePath={`/types/${type_id}`} currentPage={page} maxPages={maxPages} />
      <CardGrid ids={result.ids} />
    </>
  )
}
