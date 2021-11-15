import "../styles/tailwind.css";
import "../styles/globals.css";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 9rem)" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
