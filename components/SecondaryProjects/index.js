import React from "react";
import gsap from "gsap/dist/gsap";
import { useInView } from "react-intersection-observer";

import {
  AiFillGithub,
  AiOutlineApi,
  AiOutlineCloudServer,
  AiFillAppstore,
} from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { DiAndroid } from "react-icons/di";

import SecondaryProject from "./SecondaryProject";

const projects = [
  {
    name: "Organize App",
    featuredImage: "/images/projects/Organize App Mockup.png",
    description: `A Vue 3 & Electron application that organizes your files in a directory according to your set-up settings by looking at the file extensions
            `,
    techStacks: ["Vue 3", "Electron", "Native UI"],
    links: [
      {
        name: "Demo Video",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://res.cloudinary.com/dnoibyqq2/image/upload/v1636438880/organize-app-demo.gif",
        icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      },
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
    description: `A Genshin Impact fanapp to view farming materials, character info, setup notifications
    as well as a free public API
        `,
    techStacks: ["React Native", "Styled Components", "Node JS"],
    links: [
      {
        name: "Demo Video",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://res.cloudinary.com/dnoibyqq2/video/upload/v1637241832/genshin-app-demo.mp4",
        icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      },
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
    description: `A wallpaper app with functionalities like dark mode, pull-on-refresh, draggable sheets, download images, etc.
        `,
    techStacks: ["Flutter", "Node JS"],
    links: [
      {
        name: "Demo Video",
        color: "blue-200",
        hoverColor: "blue-600",
        href: "https://res.cloudinary.com/dnoibyqq2/video/upload/v1638186658/Flutter_wallpaper_demo.mp4",
        icon: <MdOutlineOndemandVideo title="Demo Video" size={24} />,
      },
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
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const timeline = React.useRef(null);

  React.useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.fromTo(
      ".section-header",
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: "sine.inOut",
      }
    );

    return () => timeline.current.kill();
  }, []);

  React.useEffect(() => {
    if (inView) {
      timeline.current.play();
    }
  }, [inView]);

  return (
    <div ref={ref} className="container w-full mt-48 bg-primary">
      <div className="w-full text-center">
        <h3 className="section-header">Some more projects</h3>
      </div>

      <div className="grid grid-cols-1 mt-8 projects md:grid-cols-3 gap-x-8 gap-y-8">
        {projects.map((project, idx) => (
          <SecondaryProject
            key={"secondary-project-" + project.name}
            idx={idx}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryProjects;
