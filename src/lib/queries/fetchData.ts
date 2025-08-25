import { pokeGraphqlUrl } from "@/lib/data/consts";

export const getBaseStats = async (name: string) => {
  console.log(name);
  const response = await fetch(pokeGraphqlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
query getBaseStats {
  pokemon(where: {name: {_eq: "${name.toLowerCase()}"}}) {
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
