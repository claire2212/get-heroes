import { getHeroes } from "@/api/get-heroes";
import { useQuery } from "react-query";
import Loader from "../loader";
import HeroCard from "./hero-card";
import { HeroType } from "@/models/hero";
import { AxiosError } from "axios";

const Heroes = () => {
  const { isLoading, isError, data, error } = useQuery<HeroType[], AxiosError>(
    ["heroes"],
    () => getHeroes()
  );

  if (isLoading) return <Loader />;

  if (isError) return <div>Erreur: {error.message}</div>;

  if (data?.length === 0)
    return (
      <div>
        Aucun super-héros disponibles, ils sont tous partis sauver le monde
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 p-10">
      {data?.map((hero: HeroType) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default Heroes;
