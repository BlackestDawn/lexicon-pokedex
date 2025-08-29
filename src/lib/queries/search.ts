import { pokeGraphqlUrl } from "@/lib/data/consts";

async function fetchIds(query?: string): Promise<number[]> {
  const queryStr = query ? `(where: {${query}})` : '';

  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          pokemon${queryStr} {
            id
          }
        }
      `,
    }),
  });

  const result = await response.json();
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  const ids = result.data.pokemon.map((pokemon: { id: number }) => pokemon.id);
  return ids;
}

export async function searchByName(name: string): Promise<number[]> {
  const query = `name: {_iregex: "${name}"}`;
  const ids = await fetchIds(query);
  return ids;
}

export async function getRandomIds(count: number = 1): Promise<number[]> {
  const ids = await fetchIds();
  const randomIds = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * ids.length);
    randomIds.push(ids[randomIndex]);
    ids.splice(randomIndex, 1);
  }
  return randomIds;
}
