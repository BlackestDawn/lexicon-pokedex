import TypesBanner from "@/components/parts/typesBanner";
import ContentContainer from "@/components/sectors/contentContainer";

export default function TypesPage() {
  return (
    <ContentContainer type="strong">
      <TypesBanner />
      <div className="text-center py-4">
        <p>Here you can list all Pokémons by type.</p>
      </div>
    </ContentContainer>
  )
}
