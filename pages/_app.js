import Head from 'next/head'

import "../styles/tailwind.css";
import "../styles/globals.css";
import "@fontsource/firago"


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Manish Karki</title>
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
