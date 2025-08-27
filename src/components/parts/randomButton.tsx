'use client';
import { useState } from "react";
import { getRandomIds } from "@/lib/queries/search";
import { getBasicInfoById } from "@/lib/queries/fetchData";
import { extractBasicCardData } from "@/lib/data/dataTransformation";
import Image from "next/image";
import BasicCard from "@/components/parts/basicCard";
import { BasicCardProps } from "@/lib/interfaces/props";

export default function RandomButton() {
  const [cardProps, setCardProps] = useState<BasicCardProps | null>(null);

  const handleClick = async () => {
    const ids = await getRandomIds();
    const data = await getBasicInfoById(ids);
    const cardData = extractBasicCardData(data);
    setCardProps(cardData[0]);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="p-2 pl-6 pr-6 mt-4 mb-14 cursor-pointer text-xl text-white bg-gradient-to-r from-orange-400 to-red-400 rounded-full font-bold flex items-center justify-center gap-1"
      >
        <Image
          src="/Dice.svg"
          width={25}
          height={25}
          alt="Dice"
        />
        Random Pokémon
      </button>
      <div className="flex justify-center">
        {cardProps && <BasicCard {...cardProps} />}
      </div>
    </div>
  );
}
