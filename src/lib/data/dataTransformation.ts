import type { BasicCardProps, BaseStatMatrix, BasicTypeMatrix } from "@/lib/interfaces/props";
import type { PokemonBaseStats } from "@/lib/interfaces/responses";
import { getImageUrlFromId } from "./helpers";

export function extractBasicCardData(data: PokemonBaseStats[]): BasicCardProps[] {
  return data.map((pokemon) => {
    const stats: BaseStatMatrix = pokemon.pokemonstats.reduce(
      (acc: BaseStatMatrix, stat) => {
        if (stat.stat.name === "hp") acc.hp = stat.base_stat;
        if (stat.stat.name === "attack") acc.attack = stat.base_stat;
        if (stat.stat.name === "defense") acc.defense = stat.base_stat;
        return acc;
      },
      { hp: 0, attack: 0, defense: 0 }
      );

    const types: BasicTypeMatrix[] = pokemon.pokemontypes.map((type) => ({
      id: type.type.id,
      name: type.type.name,
    }));

    return {
      id: pokemon.id,
      name: pokemon.name,
      stats: stats,
      types: types,
      imageUrl: getImageUrlFromId(pokemon.id),
    };
  });
}
