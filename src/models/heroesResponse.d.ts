import { HeroType } from "./hero";

export interface HeroesResponse {
    results: HeroType[]
    count: number
    limit: number
    offset: number
    total: number
}