import md5 from "md5";
import { formattedUrlParams } from "./formatted-url-params";

const publicApiKey = process.env.MARVEL_PUBLIC_API_KEY as string;
const privateApiKey = process.env.MARVEL_PRIVATE_API_KEY as string;

export function getBaseUrl() {
  return process.env.MARVEL_BASE_URL;
}

export function getUrlParams(searchValue?: string, offset?: string): string {
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateApiKey}${publicApiKey}`);

  const hasSearchValue =
    searchValue && searchValue !== "" && searchValue.length > 2;

  const data = {
    apikey: publicApiKey,
    ts: String(timestamp),
    hash,
    offset: offset || "0",
    ...(hasSearchValue && {
      nameStartsWith: searchValue,
    }),
  };

  return formattedUrlParams(data);
}
