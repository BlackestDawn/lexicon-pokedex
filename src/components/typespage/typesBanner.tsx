import Link from "next/link";
import TypeTag from "@/components/general/typeTag";
import { getTypes } from "@/lib/queries/fetchData";
import { TypeIdProp } from "@/lib/interfaces/props";

export default async function TypesBanner({ type_id }: TypeIdProp) {
  const types = await getTypes();
  const type_name = types.find((type) => type.id === type_id)?.name;

  return (
    <>
      <h2 className="font-jersey font-bold text-6xl text-center pt-4 pb-8 capitalize">{type_name && type_name + " "}Types</h2>

      <div className="flex flex-wrap gap-4 justify-center max-w-4/5 mx-auto py-4">
        {types.map((type) => (
          <Link
            href={`/types/${type.id}`}
            key={type.id}
            className=""
          >
            <TypeTag name={type.name} highlighted={type.id === type_id} />
          </Link>
        ))}
      </div>
    </>
  );
}
