import ContentContainer from "@/components/parts/contentContainer";
import RandomButton from "@/components/parts/randomButton";

export default function MainHeader() {
  return (
    <ContentContainer type="strong" className="flex flex-col items-center gap-4 p-14">
      <header>
        <h1 className="font-jersey text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch &apos;em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon.<br /> Find your favourite and learn about their stats.</p>
      </header>
      <RandomButton />
    </ContentContainer>
  );
}