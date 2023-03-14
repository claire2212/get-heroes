import { FC, createContext, useState } from "react";

export type HeroesContextType = {
  searchValue?: string | undefined
  updateSearchValue: (searchValue?: string) => void;
};

interface Props {
  children: React.ReactNode;
}

export const HeroesContext = createContext<HeroesContextType>({
  searchValue: undefined,
  updateSearchValue: () => null
});

const HeroesProvider: FC<Props> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>()

  const updateSearchValue = (value?: string) => {
    setSearchValue(value)
  }

  return (
    <HeroesContext.Provider value={{ searchValue, updateSearchValue }}>
      {children}
    </HeroesContext.Provider>
  );
};
export default HeroesProvider;