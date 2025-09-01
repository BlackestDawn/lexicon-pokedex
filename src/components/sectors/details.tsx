import { getExtendedInfo } from "@/lib/queries/fetchData";
import TypeTag from "@/components/details/typeTag";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContentContainer from "@/components/parts/contentContainer";
import DetailsImageBox from "@/components/parts/detailsImageBox";

interface PageProps {
  id: number;
}

export default async function DetailsPage({ id }: PageProps) {
  const response = await getExtendedInfo(id);
  const sprites = response.pokemonsprites[0];
  const showGenders = response.pokemonspecy.has_gender_differences;

  console.log("show genders:", showGenders);
  console.dir(response, { depth: null });

  return (
    <>
      <ContentContainer>
        <h2 className="font-jersey text-center capitalize my-6 text-8xl font-extrabold">
          {`#${id.toString().padStart(4, "0")} ${response.name.replaceAll("-", " ")}`}
        </h2>
      </ContentContainer>
      <ContentContainer type="weak">
        <div className="flex flex-col align-middle justify-center gap-4 py-6">
          <DetailsImageBox
            sprites={sprites}
            altText={response.name}
            genderDifference={showGenders}
            />
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
                    <th className="p-1">Abilities</th>
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
              <h4 className="text-center font-bold p-1">Available Attacks/Moves</h4>
              <ScrollArea className="h-72 w-80 rounded-md border-2 border-gray-300">
                <div className="w-full capitalize p-2">
                  {response.pokemonmoves.map((move, i) => (
                    <div key={move.move.id}>
                      {i > 0 && <hr className="text-black" />}
                      <p className="m-1">{move.move.name.replaceAll("-", " ")}</p>
                      <p className="m-1 flex justify-between">
                        {move.move.accuracy !== null && <span>Accuracy: {move.move.accuracy}</span>}
                        {move.move.power !== null && <span>Power: {move.move.power}</span>}
                      </p>
                      <p className="m-1 flex justify-between">
                        <span>PP: {move.move.pp}</span>
                        <span>Priority: {move.move.priority}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div>
              <h4 className="text-center font-bold p-1">Encounter Locations</h4>
              <ScrollArea className="h-72 w-80 rounded-md border-2 border-gray-300">
                <div className="w-full capitalize p-2">
                  {response.encounters.map((encounter, i) => (
                    <div key={encounter.locationarea.id}>
                      {i > 0 && <hr className="bg-black" />}
                      <p className="m-1">{encounter.locationarea.name.replaceAll("-", " ")}</p>
                      <p className="m-1">Level range: {encounter.min_level} - {encounter.max_level}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  )
}