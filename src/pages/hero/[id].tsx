import { getHero } from "@/api/get-hero";
import Loader from "@/components/loader";
import { HeroType } from "@/models/hero";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const HeroPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { isLoading, isError, data, error } = useQuery<HeroType, AxiosError>(
    ["hero", id],
    () => getHero(id),
    {
      enabled: !!id,
    }
  );

  if (isLoading || !id) return <Loader />;

  if (isError) return <div>Erreur: {error.message}</div>;

  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <Image
        className="object-contain p-4"
        src={`${data?.thumbnail?.path}/standard_medium.${data?.thumbnail?.extension}`}
        alt="image"
        width={140}
        height={140}
        priority
      />

      <h4 className="text-xl font-semibold tracking-tight text-blue-600 p-4">
        {data?.name}
      </h4>
      {data?.description && <p>{data?.description}</p>}
    </div>
  );
};
export default HeroPage;
