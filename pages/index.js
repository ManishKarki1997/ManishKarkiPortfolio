import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStacks from "../components/TechStacks";
import SecondaryProjects from "../components/SecondaryProjects";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";

export default function Home() {
  return (
    <div style={{ minHeight: "calc(100vh - 9rem)" }}>
      <Header />
      <div className="min-h-screen pt-32 pb-32">
        <Hero />
        <Projects />
        <TechStacks />
        <SecondaryProjects />
        <GetInTouch />

        <div className="fixed flex flex-col justify-between w-16 h-44 bottom-10 left-16 fixed-links-wrapper"></div>
      </div>
    </div>

  );
}
