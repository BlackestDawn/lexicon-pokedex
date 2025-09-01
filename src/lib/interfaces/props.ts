export interface BasicCardProps {
  id: number;
  name: string;
  stats: BaseStatMatrix;
  types: BasicTypeMatrix[];
  imageUrl: string;
  color?: string;
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

export interface TypeIdProp {
  type_id?: number;
}

export interface ParamsIdProp {
  params: Promise<{
    id: string;
  }>;
}

export interface TypesPageProp {
  type_id: number;
  page: number;
  limit: number;
}
