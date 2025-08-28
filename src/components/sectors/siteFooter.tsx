import Link from "next/link";
import Image from "next/image";
import ContentContainer from "./contentContainer";

export default function SiteFooter() {
  return (
    <ContentContainer color="bg-gray-700 flex flex-col p-8 mx-auto items-center text-white">
      <div className="flex justify-center items-center gap-4 mb-4">
        <Image
          src="/Logo.png"
          alt="Logo"
          height={40}
          width={40}
        />
        <h2 className="font-jersey text-2xl">Pokédex</h2>
      </div>
      <p>Explore the world of Pokémon</p>
      <div className="flex justify-center gap-12 mt-4">
        <Link href="#facebook">
          <Image
            src="/Facebook.svg"
            alt="Facebook"
            height={40}
            width={40}
          />
        </Link>
        <Link href="#instagram">
          <Image
            src="/Instagram.svg"
            alt="Instagram"
            height={40}
            width={40}
          />
        </Link>
      </div>
    </ContentContainer>
  );
}
