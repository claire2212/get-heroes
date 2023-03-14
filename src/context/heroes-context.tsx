import { FC, createContext, useState } from "react";

export type HeroesContextType = {
  searchValue: string;
  visibleSearchValue: string
  updateSearchValue: (searchValue: string) => void;
  updateVisibleSearchValue: (searchValue: string) => void;
};

interface IProps {
  children: React.ReactNode;
}

export const HeroesContext = createContext<HeroesContextType>({
  searchValue: "",
  visibleSearchValue: "",
  updateSearchValue: () => null,
  updateVisibleSearchValue: () => null
});

const HeroesProvider: FC<IProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [visibleSearchValue, setVisibleSearchValue]= useState<string>("")

  const updateSearchValue = (value: string) => {
    setSearchValue(value)
  }

  const updateVisibleSearchValue = (value: string) => {
    setVisibleSearchValue(value)
  }

  return (
    <HeroesContext.Provider value={{ searchValue,visibleSearchValue, updateSearchValue, updateVisibleSearchValue }}>
      {children}
    </HeroesContext.Provider>
  );
};
export default HeroesProvider;