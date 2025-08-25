import Image from "next/image";
import SearchBox from "@/components/mainpage/searchbox";
import ShowcaseRandoms from "@/components/mainpage/gridShowcase";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="font-jersey text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch &apos;em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon.<br /> Find your favourite and learn about their stats.</p>
        <button className="p-2 pl-6 pr-6 mt-4 mb-14 cursor-pointer text-xl text-white bg-gradient-to-r from-orange-400 to-red-400 rounded-full font-bold flex items-center justify-center gap-1">
          <Image
            src="/Dice.svg"
            width={25}
            height={25}
            alt="Dice"
          />
          Random Pokémon</button>
      </section>
      <SearchBox />
      <ShowcaseRandoms />
    </div>
  );
}
