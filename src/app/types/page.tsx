import TypesBanner from "@/components/sectors/typesBanner";
import MainHeader from "@/components/sectors/mainHeader";

export default function TypesPage() {
  return (
    <>
      <MainHeader />
      <div className="text-center py-4">
        <p>Here you can browse through all Pokémons by type.</p>
      </div>
      <TypesBanner />
    </>
  )
}
