import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Search from "@/components/search";
import Heroes from "@/components/heroes";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get heroes</title>
        <meta name="description" content="Get heroes technical test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Search />
        <Heroes />
      </main>
    </>
  );
}
