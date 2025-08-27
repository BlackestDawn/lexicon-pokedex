import { pokeGraphqlUrl, defaultPageStart, defaultPageLimit } from "@/lib/data/consts";
import type { BasicTypeMatrix, BasicCardProps } from "@/lib/interfaces/props";
import { PaginatedData } from "@/lib/interfaces/responses";
import { extractBasicCardData } from "@/lib/data/dataTransformation";

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

  return extractBasicCardData(result.data.pokemon);
}

export async function getTypes(): Promise<BasicTypeMatrix[]> {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query getTypes {
          pokemontype(distinct_on: type_id) {
            type {
              id
              name
            }
          }
        }
      `,
    }),
  });
  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.pokemontype.map((type: { type: { id: number, name: string } }): BasicTypeMatrix => ({
    id: type.type.id,
    name: type.type.name,
  }));
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
    name
    pokemonstats {
      base_stat
      stat {
        name
      }
    }
    pokemontypes {
      type {
        name
        id
      }
    }
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

  const cardData = extractBasicCardData(result.data.pokemon);
  const maxNum = result.data.pokemontype_aggregate.aggregate.count;
  return { cardData, maxNum };
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
    name
    id
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

  const cardData = extractBasicCardData(result.data.pokemon);
  const maxNum = result.data.pokemon_aggregate.aggregate.count;
  return { cardData, maxNum };
}
