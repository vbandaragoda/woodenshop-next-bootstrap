import Head from "next/head";
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
      <div className="container-lg bg-altsecondary">
        <h1>This is the custom css primary color</h1>
      </div>
    </>
  );
}
