import { pokeGraphqlUrl } from "@/lib/data/consts";
import { SearchResult } from "@/lib/interfaces/responses";


export async function searchByName(name: string): Promise<SearchResult[]> {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          pokemon(where: {name: {_iregex: "${name}"}}) {
            id
            name
          }
        }
      `,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.pokemon;
}

export async function getRandomIds(count: number = 1): Promise<number[]> {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          pokemon{
            id
          }
        }
      `,
    }),
  });

  const result = await response.json();
  const ids: number[] = result.data.pokemon.map((pokemon: { id: number }) => pokemon.id);
  const randomIds = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * ids.length);
    randomIds.push(ids[randomIndex]);
    ids.splice(randomIndex, 1);
  }
  return randomIds;
}
