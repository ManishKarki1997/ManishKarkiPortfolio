import {
  AiFillGithub,
  AiOutlineApi,
  AiOutlineCloudServer,
  AiFillAppstore,
} from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { DiAndroid } from "react-icons/di";

import SecondaryProject from "./SecondaryProject";

const projects = [
  {
    name: "Organize App",
    featuredImage: "/images/projects/Organize App Mockup.png",
    description: `A Vue/Electron application that organizes your files under pre-set folders.
        Choose your files, set folders to group common files under then the app organizes the directory accordingly.
            `,
    techStacks: ["Nuxt", "Electron", "Native UI"],
    links: [
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/Organize",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
      {
        name: "Android App",
        color: "blue-500",
        hoverColor: "blue-600",
        href: "https://github.com/ManishKarki1997/Organize/releases/tag/v1.0.0",
        icon: <AiFillAppstore title="Android App" size={24} />,
      },
    ],
  },
  {
    name: "Genshin Impact Guide App",
    featuredImage: "/images/projects/Genshin App Mockup Galaxy S10.png",
    description: `An app made to help farm for materials, view character and weapon information,
       setting notifications for resin refill and parametric transformer for the game Genshin Impact.
       Also a publicly available free API to access these data.
        `,
    techStacks: ["React Native", "Styled Components", "Node JS"],
    links: [
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/GenshinImpactApp",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
      {
        name: "Android App",
        color: "green-400",
        hoverColor: "green-500",
        href: "https://github.com/ManishKarki1997/GenshinImpactApp/releases/",
        icon: <DiAndroid title="Android App" size={24} />,
      },
      {
        name: "Documentation",
        color: "blue-600",
        hoverColor: "blue-700",
        href: "https://genshin-api.netlify.app/",
        icon: <AiOutlineApi title="API Documentation" size={20} />,
      },
    ],
  },
  {
    name: "Flutter Wallpapers App",
    featuredImage: "/images/projects/Flutter Wallpaper App Galaxy S10.png",
    description: `A wallpaper app made with Flutter to view wallpapers that is scraped from a backend server which scrapes wallpapers
    from third-party websites. Has functionalities like dark mode, pull-on-refresh, draggable sheets, download images, settings to set HD/SD images etc.
        `,
    techStacks: ["Flutter", "Node JS"],
    links: [
      {
        name: "Github",
        color: "gray-200",
        hoverColor: "gray-600",
        href: "https://github.com/ManishKarki1997/FlutterWallpapersApp",
        icon: <AiFillGithub title="Project Repo" size={24} />,
      },
      {
        name: "Android App",
        color: "green-400",
        hoverColor: "green-500",
        href: "https://github.com/ManishKarki1997/FlutterWallpapersApp/releases",
        icon: <DiAndroid title="Android App" size={24} />,
      },
      {
        name: "Documentation",
        color: "blue-600",
        hoverColor: "blue-700",
        href: "https://github.com/ManishKarki1997/WallpapersAPI",
        icon: <AiOutlineCloudServer title="API Server" size={20} />,
      },
    ],
  },
];

const SecondaryProjects = () => {
  return (
    <div className="container w-full mt-48 bg-primary">
      <div className="w-full text-center">
        <h2 className="text-xl text-primary">Some more projects</h2>
      </div>

      <div className="grid grid-cols-1 mt-8 projects md:grid-cols-3 gap-x-8 gap-y-8">
        {projects.map((project) => (
          <SecondaryProject
            key={"secondary-project-" + project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryProjects;
