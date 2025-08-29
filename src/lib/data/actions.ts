'use server';
import { BasicCardProps } from "@/lib/interfaces/props";
import { getRandomIds } from "@/lib/queries/search";
import { getBasicInfoById } from "@/lib/queries/fetchData";

export async function fetchRandomCard(): Promise<BasicCardProps> {
  const ids = await getRandomIds();
  const data = await getBasicInfoById(ids);
  return data[0];
}
