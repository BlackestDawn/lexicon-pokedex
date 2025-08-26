'use client';
import { useRouter } from "next/navigation";
import { getRandomIds } from "@/lib/queries/search";
import Image from "next/image";

export default function RandomButton() {
  const router = useRouter();

  const handleClick = async () => {
    const ids = await getRandomIds();
    router.push(`/pokedex/${ids[0]}`);
  };

  return (
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
  );
}
