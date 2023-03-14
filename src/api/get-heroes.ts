import { formattedUrlParams } from "@/helpers/formatted-url-params";
import { HeroType } from "@/models/hero";
import axios from "axios";
import md5 from "md5";

const publicApiKey = process.env.MARVEL_PUBLIC_API_KEY as string;
const privateApiKey = process.env.MARVEL_PRIVATE_API_KEY as string;

export async function getHeroes(searchValue?: string) {
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateApiKey}${publicApiKey}`);

  const searchHero =
    searchValue && searchValue !== "" && searchValue.length > 2;

  const data = {
    apikey: publicApiKey,
    ts: String(timestamp),
    hash,
    ...(searchHero && {
      nameStartsWith: searchValue,
    }),
  };

  const res = await axios(
    `${process.env.MARVEL_BASE_URL}characters?${formattedUrlParams(data)}`
  );

  const response = res.data;
  return response.data.results ?? ([] as HeroType[]);
}
