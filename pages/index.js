import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStacks from "../components/TechStacks";
import SecondaryProjects from "../components/SecondaryProjects";
import GetInTouch from "../components/GetInTouch";

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <Head>
        <title>Manish Karki</title>
      </Head>

      <Hero />
      <Projects />
      <TechStacks />
      <SecondaryProjects />
      <GetInTouch />

      <div className="fixed flex flex-col items-center justify-between w-16 h-32 bottom-10 left-16 fixed-links-wrapper"></div>
    </div>
  );
}
