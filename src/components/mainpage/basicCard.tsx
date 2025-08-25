import Image from "next/image";
import { BasicCardProps } from "@/lib/interfaces/props";
import { getTypeColor } from "@/lib/data/pokeType";

export default function BasicCard({
  id,
  name,
  stats,
  types,
  imageUrl,
}: BasicCardProps) {

  const accentColor = getTypeColor(types[0].name);

  return (
    <>
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="rounded-full border-2 bg-white mx-auto"
        style={{ borderColor: accentColor }}
      />
      <div className="text-center">
        <span
          className="px-2 py-1 rounded-4xl min-content"
          style={{ color: accentColor, background: `color-mix(in srgb, ${accentColor} 20%, white)` }}
        >
          {`#${id.toString().padStart(4, "0")}`}
        </span>
      </div>
      <p className="p-1 rounded-4xl text-center capitalize font-bold align-middle">
        {name}
      </p>
      <div className="flex gap-2 justify-center">
        {types.map((type) => {
          const bgClr = getTypeColor(type.name);
          return (
            <span key={type.id} className="px-2 py-1 rounded-4xl capitalize text-white" style={{ background: bgClr }}>
              {type.name}
            </span>
          )
        }
        )}
      </div>
      <div className="flex flex-col w-full">
        <p className="flex justify-between font-bold"><span>HP</span><span>{stats.hp}</span></p>
        <p className="flex justify-between font-bold"><span>Attack</span><span>{stats.attack}</span></p>
        <p className="flex justify-between font-bold"><span>Defense</span><span>{stats.defense}</span></p>
      </div>
    </>
  );
}
