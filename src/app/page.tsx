import SearchBox from "@/components/parts/searchbox";
import ShowcaseRandoms from "@/components/sectors/showcaseRandoms";
import ContentContainer from "@/components/parts/contentContainer";
import MainHeader from "@/components/sectors/mainHeader";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <ContentContainer color="bg-white">
        <SearchBox />
      </ContentContainer>
      <ShowcaseRandoms />
    </div>
  );
}
