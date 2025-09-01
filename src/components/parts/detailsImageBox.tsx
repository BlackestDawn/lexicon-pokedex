import Image from "next/image";
import { Venus, Mars } from "lucide-react";
import { PokemonSprites } from "@/lib/interfaces/responses";

interface PageProps {
  sprites: PokemonSprites;
  altText: string;
  genderDifference: boolean;
}


export default function DetailsImageBox({ sprites, altText, genderDifference }: PageProps) {
  const frontDefaultImage = sprites.sprites.other.showdown.front_default
    || sprites.sprites.other.dream_world.front_default
    || sprites.sprites.other["official-artwork"].front_default
    || sprites.sprites.front_default;
  const backDefaultImage = sprites.sprites.other.showdown.back_default
    || sprites.sprites.back_default;

  const frontFemaleImage = sprites.sprites.other.showdown.front_female
    || sprites.sprites.other.dream_world.front_female
    || sprites.sprites.other.home.front_female
    || sprites.sprites.front_female;
  const backFemaleImage = sprites.sprites.other.showdown.back_female
    || sprites.sprites.back_female;

  const imgSize = genderDifference ? 192 : 256;

  console.log("gender difference:", genderDifference);

  return (
    <div className="flex justify-center align-middle gap-4">
      {frontDefaultImage && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-center align-middle gap-2">
            {genderDifference && <Mars />}
            <h3 className="text-center font-bold">Front</h3>
          </div>
          <Image src={frontDefaultImage} alt={`${genderDifference && "Male "}${altText} front`} width={imgSize} height={imgSize} />
        </div>
      )}
      {backDefaultImage && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-center align-middle gap-2">
            {genderDifference && <Mars />}
            <h3 className="text-center font-bold">Back</h3>
          </div>
          <Image src={backDefaultImage} alt={`${genderDifference && "Male "}${altText} back`} width={imgSize} height={imgSize} />
        </div>
      )}
      {genderDifference && (
        <>
          {frontFemaleImage && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-center align-middle gap-2">
                <Venus />
                <h3 className="text-center font-bold">Front</h3>
              </div>
              <Image src={frontFemaleImage} alt={`Female ${altText} front`} width={imgSize} height={imgSize} />
            </div>
          )}
          {backFemaleImage && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-center align-middle gap-2">
                <Venus />
                <h3 className="text-center font-bold">Back</h3>
              </div>
              <Image src={backFemaleImage} alt={`Female ${altText} back`} width={imgSize} height={imgSize} />
            </div>
          )}
        </>
      )}
    </div >
  );
}
