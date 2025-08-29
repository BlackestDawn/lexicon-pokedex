import Image from "next/image";
import Navbar from "../parts/navbar";
import ContentContainer from "../parts/contentContainer";

export default function SiteHeader() {
  return (
    <ContentContainer className="flex justify-between p-4 items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/Logo.png"
          alt="Logo"
          height={40}
          width={40}
        />
        <h2 className="font-jersey text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-800">Pokédex</h2>
      </div>
      <Navbar />
    </ContentContainer>
  );
}
