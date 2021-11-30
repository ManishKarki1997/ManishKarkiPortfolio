import Head from "next/head";
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

      <Projects />
      <TechStacks />
      <SecondaryProjects />
      <GetInTouch />
    </div>
  );
}
