import Head from "next/head";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen pt-32">
      <Head>
        <title>Manish Karki</title>
      </Head>

      <Projects />
    </div>
  );
}
