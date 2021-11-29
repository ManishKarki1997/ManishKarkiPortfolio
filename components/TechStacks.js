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
    icon: <SiNodedotjs size={48} />,
  },
  {
    name: "Express JS",
    hoverColor: "blue-600",
    icon: <SiExpress size={48} />,
  },
  {
    name: "Vue JS",
    hoverColor: "green-600",
    icon: <SiVuedotjs size={48} />,
  },
  {
    name: "Nuxt",
    hoverColor: "green-600",
    icon: <SiNuxtdotjs size={48} />,
  },
  {
    name: "MySQL",
    hoverColor: "blue-600",
    icon: <SiMysql size={48} />,
  },
  {
    name: "MongoDB",
    hoverColor: "green-600",
    icon: <SiMongodb size={48} />,
  },
  {
    name: "Socket.io",
    hoverColor: "blue-600",
    icon: <SiSocketdotio size={48} />,
  },
  {
    name: "React",
    hoverColor: "blue-600",
    icon: <FaReact size={48} />,
  },
  {
    name: "Next JS",
    hoverColor: "blue-600",
    icon: <SiNextdotjs size={48} />,
  },
  {
    name: "SASS",
    hoverColor: "red-600",
    icon: <SiSass size={48} />,
  },
  {
    name: "Github",
    hoverColor: "gray-600",
    icon: <SiGithub size={48} />,
  },
];

const TechStack = ({ stack, idx }) => {
  return (
    <a
      className={`${
        idx % 2 ? "mt-6" : "-mt-6"
      } tech-stack-item w-32 mx-16 h-auto hover:text-${stack.hoverColor}`}
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
    <div className="container bg-primary">
      <div className="flex items-center h-32 overflow-hidden tech-stacks-wrapper">
        <div className="flex justify-between tech-stack">
          {stacks.map((stack, idx) => (
            <TechStack key={stack.name + "1"} idx={idx} stack={stack} />
          ))}
        </div>
        <div className="flex justify-between tech-stack">
          {stacks.map((stack, idx) => (
            <TechStack key={stack.name + "2"} idx={idx} stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
