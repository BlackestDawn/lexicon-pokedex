export interface BasicCardProps {
  id: number;
  name: string;
  stats: BaseStatMatrix;
  types: BasicTypeMatrix[];
  imageUrl: string;
}

export interface BaseStatMatrix {
  hp: number;
  attack: number;
  defense: number;
}

export interface BasicTypeMatrix {
  id: number;
  name: string;
}
