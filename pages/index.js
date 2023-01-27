import Head from "next/head";
import Arrivals from "../components/arrivals";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Woodenshop - Your wooden toy shop</title>
        <meta name="description" content="Wooden toy shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />
      <Hero />
      <Arrivals />
    </>
  );
}
