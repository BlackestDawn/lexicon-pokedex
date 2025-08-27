import { getTypeColor } from "@/lib/data/pokeType";

export default function TypeTag({ name, highlighted }: { name: string; highlighted?: boolean }) {
  const bgClr = getTypeColor(name);
  return (
    <span className={`px-2 py-1 rounded-full capitalize text-white
      ${ highlighted && "border-2 border-white"}
      `} style={{ background: bgClr }}>
      {name}
    </span>
  );
}
