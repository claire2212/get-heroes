export type HeroType = {
  id?: number
  name?: string
  thumbnail?: IHeroImage
  description?: string
}

interface IHeroImage {
  path?: string
  extension?: string
}
