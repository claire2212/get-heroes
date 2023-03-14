import { getBaseUrl, getUrlParams } from "@/helpers/api";
import { HeroType } from "@/models/hero";
import { HeroesResponse } from "@/models/heroesResponse";
import axios from "axios";

export async function getHeroes(searchValue: string, newOffset: number) {
  const baseUrl = getBaseUrl();
  const params = getUrlParams(searchValue, String(newOffset));

  const res = await axios(`${baseUrl}characters?${params}`);

  const response = res.data.data as HeroesResponse;
  return response;
}
