import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";

import Project from "./Project";
import useDarkMode from "../../hooks/useDarkMode";



const Projects = () => {

  const [isDarkMode] = useDarkMode();
console.log("@@isDarkMode",isDarkMode)
  const projects = React.useMemo(() =>{
return [
  {
    name: "FinancePal",
    imageUrl: isDarkMode ? "/images/projects/financepal/financepal-dark.png" : "/images/projects/financepal/financepal.png",
    description: `Effortlessly track, analyze, and manage all your financial transactions across various entities. From loans to repayments, gain insights with comprehensive reports, intuitive charts, and organized tagging systems—all in one place.`,
    techStacks: ["React", "ShadCN", "Node", "Postgres"],
    links: [
      {
        name: "Project Demo",
        color: "blue-200",
        hoverColor: "blue-400",
        href: "https://financepal.manishkarki.com/",
        icon: <BiLinkExternal title="Project Demo" size={24} />,
      },
      // {
      //   name: "Demo Video",
      //   color: "blue-200",
      //   hoverColor: "blue-400",
      //   href: "https://res.cloudinary.com/dnoibyqq2/video/upload/v1638285732/ecommerce-demo.mkv",
      //   icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      // },
      // {
      //   name: "Github",
      //   color: "gray-200",
      //   hoverColor: "gray-600",
      //   href: "https://github.com/ManishKarki1997/SSR-Ecommerce-App",
      //   icon: <AiFillGithub title="Project Repo" size={24} />,
      // },
    ],
  },
  {
    name: "DeployVite",
    imageUrl: "/images/projects/vercel/vercel-clone-demo.png",
    description: `
      Deploy Your Vite Projects. Submit your Vite project, and we'll handle the build and deployment for you—quick and easy.
    `,
    techStacks: ["React", "Postgres", "AWS", "Socket","Redis", "Bash",],

    links: [
      {
        name: "DeployVite",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://vercel.manishkarki.com/",
        icon: <BiLinkExternal title="Project Demo" size={24} />,
      },
      // {
      //   name: "Demo Video",
      //   color: "blue-200",
      //   hoverColor: "blue-600",
      //   href: "https://res.cloudinary.com/dnoibyqq2/image/upload/v1638284382/Typewars_Demo_Gif.gif",
      //   icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      // },
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/vercel-clone",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
    ],
  },
  {
    name: "ChatWithDocs",
    imageUrl: "/images/projects/chatdocs/chatwithdocs.webp",
    description: `
      Upload any PDFs and chat with it using AI. Includes stripe integration for subscriptions.
    `,
    techStacks: ["NextJS", "Supabase", "Stripe", "OpenAI", "Pinecone"],

    links: [
      {
        name: "Demo",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://chat-with-docs-two.vercel.app/",
        icon: <BiLinkExternal title="Project Demo" size={24} />,
      },
      // {
      //   name: "Demo Video",
      //   color: "blue-200",
      //   hoverColor: "blue-600",
      //   href: "https://res.cloudinary.com/dnoibyqq2/image/upload/v1638284382/Typewars_Demo_Gif.gif",
      //   icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      // },
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/chat-with-docs",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
    ],
  },
]
  },[isDarkMode]);

  return (
    <div id="projects" className="w-full mt-56 bodyContainer">
      {projects.map((project, idx) => (
        <Project key={project.name} idx={idx} project={project} />
      ))}
    </div>
  );
};

export default Projects;
