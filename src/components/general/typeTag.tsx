import { getTypeColor } from "@/lib/data/pokeType";

export default function TypeTag({ name }: { name: string }) {
  const bgClr = getTypeColor(name);
  return (
    <span className="px-2 py-1 rounded-full capitalize text-white" style={{ background: bgClr }}>
      {name}
    </span>
  );
}
