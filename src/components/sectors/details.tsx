import Image from "next/image";
import { getExtendedInfo } from "@/lib/queries/fetchData";
import { getImageFromId, getUniqueMoves, getUniqueEncounters } from "@/lib/data/helpers";
import TypeTag from "@/components/details/typeTag";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IdProps {
  id: number;
}

export default async function DetailsPage({ id }: IdProps) {
  const response = await getExtendedInfo(id);
  const moves = getUniqueMoves(response.pokemonmoves);
  const encounters = getUniqueEncounters(response.encounters);

  return (
    <div className="flex flex-col align-middle justify-center gap-4 py-6">
      <div className="flex justify-center align-middle gap-4">
        <div>
          <Image src={getImageFromId(id)} alt={response.name} width={256} height={256} />
        </div>
        <div className="my-auto">
          <h2 className="text-5xl font-bold capitalize">{response.name}</h2>
        </div>
      </div>
      <div className="flex gap-8 mx-auto">
        <table className="w-full capitalize max-w-1/4 min-w-3xs">
          <thead className="font-bold">
            <tr>
              <th className="p-1 text-left">Stat</th>
              <th className="p-1 text-right">Value</th>
            </tr>
          </thead>
          <tbody>
            {response.pokemonstats.map((stat) => (
              <tr key={stat.stat.name}>
                <td className="p-1">{stat.stat.name}</td>
                <td className="p-1 text-right">{stat.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col gap-4 align-middle">
          <h4 className="text-center font-bold p-1">Types</h4>
          {response.pokemontypes.map((type) => (
            <TypeTag key={type.type.id} name={type.type.name} />
          ))}
        </div>
        <div>
          <table className="w-full capitalize max-w-1/4 min-w-3xs">
            <thead className="font-bold">
              <tr>
                <th className="p-1">Base abilities</th>
              </tr>
            </thead>
            <tbody>
              {response.pokemonabilities.map((ability) => (
                <tr key={ability.ability.id}>
                  <td className="p-1">{ability.ability.name.replaceAll("-", " ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <div>
          <h4 className="text-center font-bold p-1">Available Moves</h4>
          <ScrollArea className="h-72 w-80 rounded-md border-2 border-gray-300">
            <div className="w-full capitalize p-2">
              {moves.map((move) => (
                <div key={move.move.id}>
                  <p className="p-1">{move.move.name.replaceAll("-", " ")}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div>
          <h4 className="text-center font-bold p-1">Encounter Locations</h4>
          <ScrollArea className="h-72 w-80 rounded-md border-2 border-gray-300">
            <div className="w-full capitalize p-2">
              {encounters.map((encounter, i) => (
                <div key={encounter.locationarea.id}>
                  <div>
                    { i > 0 && <hr /> }
                    <p className="p-1">{encounter.locationarea.name.replaceAll("-", " ")}</p>
                    <p className="p-1">Level range: {encounter.min_level} - {encounter.max_level}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}