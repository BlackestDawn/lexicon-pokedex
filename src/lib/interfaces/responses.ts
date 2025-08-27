import { BasicCardProps } from "./props";

export interface PokemonBaseStats {
  id: number;
  name: string;
  pokemonstats: PokemonStat[];
  pokemontypes: PokemonType[];
}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonType {
  type: {
    id: number;
    name: string;
  };
}

export interface PaginatedData {
  cardData: BasicCardProps[];
  maxNum: number;
}
