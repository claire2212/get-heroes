import { getHeroes } from "@/api/get-heroes";
import { useQuery } from "react-query";
import Loader from "../loader";
import HeroCard from "./hero-card";
import { HeroType } from "@/models/hero";
import { AxiosError } from "axios";
import { HeroesContext, HeroesContextType } from "@/context/heroes-context";
import { useContext, useState } from "react";
import NoResults from "../no-results";
import { HeroesResponse } from "@/models/heroesResponse";
import Pagination from "../pagination";

export const HEROES_PER_PAGE = 20;

const Heroes = () => {
  const [newOffset, setNewOffset] = useState<number>(0);
  const { searchValue } = useContext<HeroesContextType>(HeroesContext);

  const { isLoading, isError, data, error, refetch } = useQuery<
    HeroesResponse,
    AxiosError
  >(["heroes", { searchValue, newOffset }], () =>
    getHeroes(searchValue, newOffset)
  );

  const onChangePage = (offset: number) => {
    setNewOffset(offset);
  };

  const heroes: HeroType[] = data?.results || [];
  const totalCount: number = data?.total || 0;
  const offset: number = data?.offset || 0;

  if (isLoading) return <Loader />;

  if (isError) return <div>Erreur: {error.message}</div>;

  if (heroes.length === 0) return <NoResults />;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 p-10">
        {heroes.map((hero: HeroType) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
      {totalCount > HEROES_PER_PAGE && (
        <Pagination
          totalCount={totalCount}
          offset={offset}
          onChangePage={onChangePage}
        />
      )}
    </>
  );
};

export default Heroes;
