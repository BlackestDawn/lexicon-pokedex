import BasicCard from "@/components/parts/basicCard";
import { BasicCardProps } from "@/lib/interfaces/props";

export default function CardGrid({ cards }: { cards: BasicCardProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr py-4">
      {cards.map((card) => (
        <BasicCard key={card.id} {...card} />
      ))}
    </div>
  );
}
