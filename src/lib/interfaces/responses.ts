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

export interface PokemonExtendedStats extends PokemonBaseStats {
  pokemonabilities: PokemonAbility[];
  pokemonmoves: PokemonMove[];
  encounters: PokemonEncounter[];
}

interface PokemonAbility {
  ability: {
    id: number;
    name: string;
  };
}

export interface PokemonMove {
  move: {
    id: number;
    name: string;
  };
}

export interface PokemonEncounter {
  locationarea: {
    id: number;
    name: string;
  };
  min_level: number;
  max_level: number;
}

export interface SearchResult {
  id: number;
  name: string;
}
