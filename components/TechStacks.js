import React from "react";

import { FaReact } from "react-icons/fa";
import {
  SiNodedotjs,
  SiNuxtdotjs,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiVuedotjs,
  SiNextdotjs,
  SiSass,
  SiExpress,
  SiGithub,
} from "react-icons/si";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stacks = [
  {
    name: "Node JS",
    hoverColor: "blue-600",
    icon: <SiNodedotjs title="Node JS" size={56} />,
  },
  {
    name: "Express JS",
    hoverColor: "blue-600",
    icon: <SiExpress title="Express JS" size={56} />,
  },
  {
    name: "Vue JS",
    hoverColor: "green-500",
    icon: <SiVuedotjs title="Vue JS" size={56} />,
  },
  {
    name: "Nuxt",
    hoverColor: "green-500",
    icon: <SiNuxtdotjs title="Nuxt JS" size={56} />,
  },
  {
    name: "MySQL",
    hoverColor: "blue-600",
    icon: <SiMysql title="MySQL" size={56} />,
  },
  {
    name: "MongoDB",
    hoverColor: "green-500",
    icon: <SiMongodb title="MongoDB" size={56} />,
  },
  {
    name: "Socket.io",
    hoverColor: "blue-600",
    icon: <SiSocketdotio title="Socket.io" size={56} />,
  },
  {
    name: "React",
    hoverColor: "blue-600",
    icon: <FaReact title="React" size={56} />,
  },
  {
    name: "Next JS",
    hoverColor: "blue-600",
    icon: <SiNextdotjs title="Next JS" size={56} />,
  },
  {
    name: "SASS",
    hoverColor: "red-400",
    icon: <SiSass title="SASS" size={56} />,
  },
  {
    name: "Github",
    hoverColor: "gray-600",
    icon: <SiGithub title="Github" size={56} />,
  },
];

const TechStack = ({ stack, idx }) => {
  return (
    <a
      className={`${
        idx % 2 ? "md:mt-6" : "md:-mt-6"
      } tech-stack-item mt-0 w-32 md:mx-16  my-24 md:my-0 mx-0 h-auto flex items-center justify-center hover:text-${
        stack.hoverColor
      }`}
      href=""
      target="_blank"
      title={stack.name}
    >
      {stack.icon}
    </a>
  );
};

const TechStacks = () => {
  return (
    <div className="bodyContainer bg-primary">
      <div className="flex items-center h-auto overflow-hidden md:h-32 tech-stacks-wrapper">
        <div className="flex flex-wrap justify-between w-full tech-stack md:flex-nowrap md:w-auto">
          {stacks.map((stack, idx) => (
            <TechStack key={stack.name + "1"} idx={idx} stack={stack} />
          ))}
        </div>
        <div className="justify-between hidden md:flex tech-stack">
          {stacks.map((stack, idx) => (
            <TechStack key={stack.name + "2"} idx={idx} stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
