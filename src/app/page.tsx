import RandomButton from "@/components/parts/randomButton";
import SearchBox from "@/components/parts/searchbox";
import ShowcaseRandoms from "@/components/parts/gridShowcase";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="font-jersey text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch &apos;em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon.<br /> Find your favourite and learn about their stats.</p>
        <RandomButton />
      </section>
      <SearchBox />
      <ShowcaseRandoms />
    </div>
  );
}
