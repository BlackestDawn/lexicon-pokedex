import { PokemonMove, PokemonEncounter } from "../interfaces/responses";

export function getImageFromId(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function getUniqueMoves(moves: PokemonMove[]): PokemonMove[] {
  const seenIds = new Set<number>();
  return moves.filter((move) => {
    if (seenIds.has(move.move.id)) {
      return false;
    }
    seenIds.add(move.move.id);
    return true;
  });
}

export function getUniqueEncounters(encounters: PokemonEncounter[]): PokemonEncounter[] {
  const seenIds = new Set<number>();
  return encounters.filter((encounter) => {
    if (seenIds.has(encounter.locationarea.id)) {
      return false;
    }
    seenIds.add(encounter.locationarea.id);
    return true;
  });
}
