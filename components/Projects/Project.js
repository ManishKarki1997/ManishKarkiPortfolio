import React from "react";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { useInView } from "react-intersection-observer";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ project, idx }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const projectTimelineRef = React.useRef(null);

  React.useEffect(() => {
    projectTimelineRef.current = gsap.timeline({
      paused: true,
    });

    projectTimelineRef.current
      .to(`.project-${idx + 1}`, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "sine.inOut",
      })

      .to(`.project-${idx + 1} .overlay`, {
        width: 0,
        duration: 0.5,
        autoAlpha: 1,
        ease: "sine.inOut",
      })
      .fromTo(
        `.project-${idx + 1} .project-name`,
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
        `.project-${idx + 1} .project-description `,
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

  React.useEffect(() => {
    if (inView) {
      projectTimelineRef.current.play();
    } else {
      //   projectTimelineRef.current.timeScale(1.5).reverse();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`project opacity-0 w-full lg:w-full xl:w-10/12 xl:mb-64 mb-24 flex flex-col lg:flex-row project-${
        idx + 1
      }
      ${idx % 2 === 0 ? "mr-auto" : "ml-auto"}
      `}
    >
      <div
        style={{ maxHeight: "600px" }}
        className={`relative w-full h-full my-6 image-wrapper xl:w-7/12 ${
          idx % 2 === 0 ? " order-none" : "lg:order-1"
        }`}
      >
        <div
          className={`absolute top-0 z-10 w-full h-full overlay bg-primary
        ${idx % 2 === 0 ? "right-0" : "left-0"}
        `}
        ></div>

        <Image
          src={project.imageUrl}
          alt="Project Image"
          objectFit="cover"
          width="1000"
          height="1000"
        />
      </div>

      <div className="w-full project-content-wrapper xl:w-5/12">
        <div className="relative px-2 py-6 xl:py-8 project-name-wrapper lg:mb-16 xl:mb-20">
          <h4
            className={`text-2xl whitespace-nowrap font-black lg:absolute lg:top-10 xl:top-16  lg:text-6xl 2xl:text-7xl text-primary project-name
          ${idx % 2 === 0 ? "xl:-left-20 md:-left-20" : "xl:left-36 md:left-24"}
          `}
          >
            {project.name}.
          </h4>
        </div>

        <div
          className={`w-full px-2 py-4 lg:px-8 lg:max-w-6xl 2xl:max-w-7xl   xl:px-12  flex flex-col 
      ${idx % 2 === 0 ? "items-start" : "xl:items-end"}
      `}
        >
          <p className="text-base font-semibold xl:text-lg text-secondary project-description">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center my-6 space-x-4 project-stack-wrapper">
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
              <AiFillGithub size={24} />
            </a>
            <a
              className="cursor-pointer text-primary project-link"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              <BiLinkExternal size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
