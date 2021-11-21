import React from "react";
import Image from "next/image";
import gsap from "gsap/dist/gsap";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";

const Project = ({ project, idx }) => {
  const projectTimelineRef = React.useRef(null);

  let x = 1;

  const repeatAnimation = () => {
    if (x % 2 === 0) {
      projectTimelineRef.current.timeScale(1).play();
    } else {
      projectTimelineRef.current.timeScale(1.6).reverse();
    }

    x++;
  };

  React.useEffect(() => {
    projectTimelineRef.current = gsap.timeline({
      // paused:true
    });

    projectTimelineRef.current
      .to(".overlay", {
        width: 0,
        duration: 1.5,
        autoAlpha: 1,
        ease: "sine.inOut",
      })
      .fromTo(
        ".project-name",
        {
          duration: 0.6,
          autoAlpha: 0,
          y: 20,
        },
        {
          y: 0,
          autoAlpha: 1,
        }
      )
      .fromTo(
        ".project-description",
        {
          duration: 0.6,
          autoAlpha: 0,
          y: 20,
        },
        {
          y: 0,
          autoAlpha: 1,
        }
      )
      .from(document.querySelectorAll(`.project-${idx + 1} .stack`), {
        ease: "sine.inOut",
        autoAlpha: 0,
        y: -10,
        duration: 0.5,
        stagger: {
          amount: 0.2,
        },
      })
      .from(document.querySelectorAll(`.project-${idx + 1} .project-link`), {
        ease: "sine.inOut",
        autoAlpha: 0,
        x: -10,
        duration: 0.5,
        stagger: {
          amount: 0.2,
        },
      });

    return () => projectTimelineRef.current.kill();
  }, [idx]);

  return (
    <div
      className={`project w-full mb-16 md:w-7/12 flex flex-col project-${
        idx + 1
      } ${idx % 2 === 0 ? "items-start" : " ml-auto items-end"}`}
    >
      <div className="px-4 py-4 lg:px-24 md:px-8 project-name-wrapper">
        <h4 className="text-xl font-semibold lg:text-3xl text-primary project-name">
          {project.name}.
        </h4>
        <button className="text-accent" onClick={() => repeatAnimation()}>
          <IoIosRepeat size={20} />
        </button>
      </div>

      <div className="relative w-full my-6 image-wrapper">
        <div className="absolute top-0 right-0 z-10 w-full h-full overlay bg-primary"></div>
        {/* <img
          className="object-cover w-full h-full"
          src={project.imageUrl}
          alt={"Image for the project " + project.title}
        /> */}
        <Image
          src={project.imageUrl}
          alt="Project Image"
          objectFit="cover"
          width="1000"
          height="600"
        />
      </div>
      <div
        className={`w-full px-4 py-4 lg:max-w-4xl lg:px-24 md:px-8 flex flex-col 
      ${idx % 2 === 0 ? "items-start" : " items-end"}
      `}
      >
        <p className="text-lg text-secondary project-description">
          {project.description}
        </p>

        <div className="flex items-center my-6 space-x-4 project-stack-wrapper">
          {project.techStacks.map((stack) => (
            <p
              className="text-base font-medium text-accent stack"
              key={project.name + stack}
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="flex items-center space-x-4 project-links-wrapper">
          <a
            className="cursor-pointer text-primary project-link"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            className="cursor-pointer text-primary project-link"
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            <BiLinkExternal size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
