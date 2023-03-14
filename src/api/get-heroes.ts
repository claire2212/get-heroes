import { getBaseUrl, getUrlParams } from "@/helpers/api";
import { HeroType } from "@/models/hero";
import axios from "axios";

export async function getHeroes(searchValue: string) {
  const baseUrl = getBaseUrl();
  const params = getUrlParams(searchValue);
    const res = await axios(`${baseUrl}characters?${params}`);

    const response = res.data;
    return response.data.results ?? ([] as HeroType[]);
}
