import { BasicTypeMatrix } from "@/lib/interfaces/props";

export const typeColors = {
  bug: "#94bc4a",
  dark: "#736c75",
  dragon: "#6a7baf",
  electric: "#e5c531",
  fairy: "#e397d1",
  fighting: "#cb5f48",
  fire: "#ea7a3c",
  flying: "#7da6de",
  ghost: "#846ab6",
  grass: "#71c558",
  ground: "#cc9f4f",
  ice: "#70cbd4",
  normal: "#aab09f",
  poison: "#b468b7",
  psychic: "#e5709b",
  rock: "#b2a061",
  steel: "#89a1b0",
  water: "#539ae2",
  unknown: "#81a596",
};

export type PokemonType = keyof typeof typeColors;

export function getTypeColor(type: unknown) {
  if (typeof type === "string" && type in typeColors) {
    return typeColors[type as PokemonType];
  }
  return typeColors.unknown;
};

export const TypesList: BasicTypeMatrix[] = [
  { id: 0, name: "unknown" },
  { id: 1, name: "normal" },
  { id: 2, name: "fighting" },
  { id: 3, name: "flying" },
  { id: 4, name: "poison" },
  { id: 5, name: "ground" },
  { id: 6, name: "rock" },
  { id: 7, name: "bug" },
  { id: 8, name: "ghost" },
  { id: 9, name: "steel" },
  { id: 10, name: "fire" },
  { id: 11, name: "water" },
  { id: 12, name: "grass" },
  { id: 13, name: "electric" },
  { id: 14, name: "psychic" },
  { id: 15, name: "ice" },
  { id: 16, name: "dragon" },
  { id: 17, name: "dark" },
  { id: 18, name: "fairy" },
];
