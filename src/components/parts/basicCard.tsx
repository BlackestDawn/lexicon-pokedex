import Image from "next/image";
import Link from "next/link";
import { BasicCardProps } from "@/lib/interfaces/props";
import { getTypeColor } from "@/lib/data/pokeType";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import TypeTag from "@/components/details/typeTag";

export default function BasicCard({
  id,
  name,
  stats,
  types,
  imageUrl,
  color,
}: BasicCardProps) {

  const accentColor = color || getTypeColor(types[0].name);

  return (
    <Link href={`/pokedex/${id}`} className="block h-full">
      <Card className="flex flex-col h-full items-center border-5 border-blue-700 rounded-xl bg-sky-50 min-w-58">
        <CardHeader className="text-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={128}
            height={128}
            content="fit"
            className="rounded-full border-2 bg-white mx-auto max-h-32 max-w-32"
            style={{ borderColor: accentColor }}
          />
          <div className="mt-2">
            <span
              className="px-2 py-1 rounded-full min-content"
              style={{ color: accentColor === "white" ? "black" : accentColor, background: `color-mix(in srgb, ${accentColor} 20%, white)` }}
            >
              {`#${id.toString().padStart(4, "0")}`}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-2 flex-1 flex flex-col">
          <div className="flex items-center justify-center">
            <h3 className="text-lg capitalize font-bold leading-tight">
              {name}
            </h3>
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            {types.map((type) => <TypeTag key={type.id} name={type.name} />)}
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <div className="flex flex-col w-full space-y-1">
            <div className="flex justify-between font-bold"><span>HP</span><span>{stats.hp}</span></div>
            <div className="flex justify-between font-bold"><span>Attack</span><span>{stats.attack}</span></div>
            <div className="flex justify-between font-bold"><span>Defense</span><span>{stats.defense}</span></div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
