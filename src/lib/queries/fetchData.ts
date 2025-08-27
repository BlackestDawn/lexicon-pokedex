import { pokeGraphqlUrl } from "@/lib/data/consts";
import type { PokemonBaseStats } from "@/lib/interfaces/responses";

export async function getBasicInfoById(id: number[]): Promise<PokemonBaseStats[]>  {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query pokemonById {
  pokemon(where: {id: {_in: [${id.join(',')}]}}) {
    id
    name
    pokemonstats {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        id
        name
      }
    }
  }
}`,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.pokemon;
}
