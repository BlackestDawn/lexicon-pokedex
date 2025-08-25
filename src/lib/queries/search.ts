import { pokeGraphqlUrl } from "../data/consts";

export async function getIdFromName(name: string) {
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          pokemon(where: {name: {_eq: "${name.toLowerCase()}"}}) {
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

  return result.data.pokemon.id;
}
