import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";

import Project from "./Project";

const projects = [
  {
    name: "Ecommerce App",
    imageUrl: "/images/projects/Ecommerce Mockup Output.png",
    description: `
         A Server-Side Rendered fullstack ecommerce application including the admin side functionalities.
         Features the ability to filter products based on their categories/subcategories, their filter basis (size, color, brand), stripe payment (test mode),
         cart and wishlist functionality. Admin side functions include the ability to manage categories, products, filters.`,
    techStacks: ["Nuxt", "Tailwind", "Node", "Postgres"],
    links: [
      {
        name: "Project Demo",
        color: "blue-200",
        hoverColor: "blue-400",
        href: "https://ssr-ecommerce-app.vercel.app/",
        icon: <BiLinkExternal title="Project Demo" size={24} />,
      },
      {
        name: "Demo Video",
        color: "blue-200",
        hoverColor: "blue-400",
        href: "https://res.cloudinary.com/dnoibyqq2/video/upload/v1638285732/ecommerce-demo.mkv",
        icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      },
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/SSR-Ecommerce-App",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
    ],
  },
  {
    name: "TypeWars",
    imageUrl: "/images/projects/Typewars Output.png",
    description: `
      A real-time multiplayer typing game with the ability to challenge players, play a rematch, some basic typing stats.
      An old project I did to learn about Socket.io and realtime in general.
    `,
    techStacks: ["Vue", "Vuesax", "Node", "Mongodb"],

    links: [
      {
        name: "Project Demo",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://typewars.netlify.app",
        icon: <BiLinkExternal title="Project Demo" size={24} />,
      },
      {
        name: "Demo Video",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://res.cloudinary.com/dnoibyqq2/image/upload/v1638284382/Typewars_Demo_Gif.gif",
        icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      },
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/Type-Wars",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="container w-full">
      {projects.map((project, idx) => (
        <Project key={project.name} idx={idx} project={project} />
      ))}
    </div>
  );
};

export default Projects;
