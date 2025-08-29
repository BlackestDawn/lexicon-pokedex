import BasicCard from "@/components/parts/basicCard";
import ContentContainer from "@/components/parts/contentContainer";
import { getBasicInfoById } from "@/lib/queries/fetchData";
import { Suspense } from "react";
import LoadingSpinner from "@/components/parts/loadingSpinner";

interface PageProps {
  ids: number[];
  title?: string;
}

export default async function CardGrid({ ids, title }: PageProps) {
  const cards = await getBasicInfoById(ids);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContentContainer type="weak" className="py-6">
        {title && <h3 className="font-jersey text-4xl text-center py-8 font-bold">{title}</h3>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {cards.map((card) => (
          <BasicCard key={card.id} {...card} />
        ))}
        </div>
      </ContentContainer>
    </Suspense>
  );
}
