import RandomButton from "@/components/parts/randomButton";
import SearchBox from "@/components/parts/searchbox";
import ShowcaseRandoms from "@/components/parts/featured";
import ContentContainer from "@/components/sectors/contentContainer";

export default function Home() {
  return (
    <div>
      <ContentContainer type="strong" className="flex flex-col items-center gap-4 p-14">
        <h1 className="font-jersey text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch &apos;em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon.<br /> Find your favourite and learn about their stats.</p>
        <RandomButton />
      </ContentContainer>
      <ContentContainer color="bg-white">
        <SearchBox />
      </ContentContainer>
      <ContentContainer type="weak">
        <ShowcaseRandoms />
      </ContentContainer>
    </div>
  );
}
