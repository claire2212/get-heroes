import { HeroType } from "@/models/hero";
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ hero }: { hero: HeroType }) => {
  return (
    <Link href={`/hero/${hero.id}`}>
      <div className="w-full rounded-lg shadow-md lg:max-w-sm min-h-full">
        <Image
          className="object-contain rounded-full p-4"
          src={`${hero.thumbnail?.path}/standard_medium.${hero.thumbnail?.extension}`}
          alt="image"
          width={140}
          height={140}
          priority
        />

        <h4 className="text-xl font-semibold tracking-tight text-blue-600 p-4">
          {hero.name}
        </h4>
      </div>
    </Link>
  );
};

export default HeroCard;
