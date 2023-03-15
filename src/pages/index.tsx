import Head from "next/head"
import Search from "@/components/search"
import Heroes from "@/components/heroes"

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
        <Search />
        <Heroes />
      </main>
    </>
  )
}
