import Head from 'next/head'

import "../styles/tailwind.css";
import "../styles/globals.css";
import "@fontsource/firago"
import { ThemeProvider } from '../providers/theme-provider';


function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <Head>
        <title>Manish Karki</title>
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
