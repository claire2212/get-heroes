import { HeroesContext, HeroesContextType } from "@/context/heroes-context"
import Image from "next/image"
import { useContext } from "react"
import Thanos from "../../../public/Thanos.jpeg"
import Groot from "../../../public/Groot.jpeg"

const NoResults = () => {
  const { searchValue } = useContext<HeroesContextType>(HeroesContext)

  if (searchValue == "") {
    return (
      <>
        <p className="text-center">
          Aucun super-héros disponible, ils sont tous partis vaincre Thanos
        </p>
        <Image
          src={Thanos}
          alt="le méchant Thannos"
          width={200}
          height={200}
          className="m-auto"
        />
      </>
    )
  }
  return (
    <div className="m-auto">
      <p className="text-center">
        Oh non, aucun résultat ne correspond à votre recherche
      </p>
      <Image src={Groot} alt="Groot triste" width={200} className="m-auto" />
    </div>
  )
}

export default NoResults
