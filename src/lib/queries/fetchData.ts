import { pokeGraphqlUrl, defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import type { BasicCardProps } from "@/lib/interfaces/props";
import { PaginatedData, PokemonExtendedStats } from "@/lib/interfaces/responses";
import { extractBasicCardData } from "@/lib/data/dataTransformation";

const baseInfoPart = `
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
`;

export async function getBasicInfoById(id: number[]): Promise<BasicCardProps[]>  {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query pokemonById {
  pokemon(where: {id: {_in: [${id.join(',')}]}}) {
    ${baseInfoPart}
  }
}`,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return extractBasicCardData(result.data.pokemon);
}

export async function getPageByType(type_id: number, page: number = defaultPageStart, limit: number = defaultPageLimit): Promise<PaginatedData>  {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query pokemonByType {
  pokemon(where: {pokemontypes: {type_id: {_eq: ${type_id}}}}, limit: ${limit}, offset: ${(page - 1) * limit}) {
    id
  }
  pokemontype_aggregate(where: {type_id: {_eq: ${type_id}}}) {
    aggregate {
      count
    }
  }
}`,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  const ids = result.data.pokemon.map((pokemon: { id: number }) => pokemon.id);
  const maxNum = result.data.pokemontype_aggregate.aggregate.count;
  return { ids, maxNum };
}

export async function getPageFromAll(page: number = defaultPageStart, limit: number = defaultPageLimit): Promise<PaginatedData>  {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query getPageFromAll {
  pokemon(limit: ${limit}, offset: ${(page - 1) * limit}) {
    id
  }
  pokemon_aggregate {
    aggregate {
      count
    }
  }
}`,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  const ids = result.data.pokemon.map((pokemon: { id: number }) => pokemon.id);
  const maxNum = result.data.pokemon_aggregate.aggregate.count;
  return { ids, maxNum };
}

export async function getExtendedInfo(id: number): Promise<PokemonExtendedStats>  {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query getExtendedStats {
  pokemon(where: {id: {_eq: ${id}}}) {
    ${baseInfoPart}
    pokemonabilities {
      ability {
        id
        name
      }
    }
    encounters(distinct_on: location_area_id) {
      locationarea {
        id
        name
      }
      max_level
      min_level
    }
    pokemonmoves(distinct_on: move_id) {
      move {
        id
        name
        accuracy
        pp
        power
        priority
      }
    }
  }
}`}),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.pokemon[0];
}