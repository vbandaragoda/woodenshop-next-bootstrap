import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Woodenshop - Your wooden toy shop</title>
        <meta name="description" content="Wooden toy shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1>Hello!</h1>
      </div>
    </>
  )
}
