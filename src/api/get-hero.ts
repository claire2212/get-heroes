import { getBaseUrl, getUrlParams } from "@/helpers/api";
import { HeroType } from "@/models/hero";
import axios from "axios";

export async function getHero(
  id: string | string[] | undefined
): Promise<HeroType> {
  const baseUrl = getBaseUrl()
  const params = getUrlParams()

  const res = await axios(
    `${baseUrl}characters/${id}?${params}`
  );

  return res.data.data.results[0] ?? [];
}
