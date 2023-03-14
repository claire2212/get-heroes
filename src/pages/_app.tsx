import Header from "@/components/layout/header";
import HeroesProvider from "@/context/heroes-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroesProvider>
        <Header/>
        <Component {...pageProps} />
      </HeroesProvider>
    </QueryClientProvider>
  );
}
