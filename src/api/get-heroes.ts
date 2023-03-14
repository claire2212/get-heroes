import { formattedUrlParams } from "@/helpers/formatted-url-params";
import axios from "axios";
import md5 from "md5";

const publicApiKey = process.env.MARVEL_PUBLIC_API_KEY as string
const privateApiKey = process.env.MARVEL_PRIVATE_API_KEY as string

export async function getHeroes() {
    const timestamp = Date.now();
    const hash = md5(
      `${timestamp}${privateApiKey}${publicApiKey}`
    );
  
    const data = {
      apikey: publicApiKey,
      ts: String(timestamp),
      hash,
    };
  
    const res = await axios(`${process.env.MARVEL_BASE_URL}?${formattedUrlParams(data)}`);
  
    const response = res.data;
    const heroes = response.data.results ?? [];
   // console.log('heroes')
    return heroes;
}