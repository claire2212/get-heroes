import { FC, createContext, useState } from "react";

export type HeroesContextType = {
  searchValue: string;
  updateSearchValue: (searchValue: string) => void;
};

interface IProps {
  children: React.ReactNode;
}

export const HeroesContext = createContext<HeroesContextType>({
  searchValue: "",
  updateSearchValue: () => null
});

const HeroesProvider: FC<IProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("")

  const updateSearchValue = (value: string) => {
    setSearchValue(value)
  }

  return (
    <HeroesContext.Provider value={{ searchValue, updateSearchValue }}>
      {children}
    </HeroesContext.Provider>
  );
};
export default HeroesProvider;