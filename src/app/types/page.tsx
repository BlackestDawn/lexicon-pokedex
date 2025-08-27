import TypesBanner from "@/components/parts/typesBanner";

export default function TypesPage() {
  return (
    <>
      <div className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)]">
        <div className="max-w-5xl mx-auto">
          <TypesBanner />

          <div className="text-center py-4">
            <p>Here you can list all Pokémons by type.</p>
          </div>
        </div>
      </div>
    </>
  )
}
