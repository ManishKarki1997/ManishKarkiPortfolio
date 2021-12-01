import React from "react";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { useInView } from "react-intersection-observer";

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
      .fromTo(
        `.project-${idx + 1}`,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.3,
          ease: "sine.inOut",
        }
      )

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
      className={`project  w-full lg:w-full  xl:mb-64 mb-24 flex flex-col lg:flex-row project-${
        idx + 1
      }
      ${idx % 2 === 0 ? "mr-auto" : "ml-auto"}
      `}
    >
      <div
        style={{ maxHeight: "700px" }}
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
        <div className="relative px-2 py-6 xl:py-8 project-name-wrapper lg:mb-20 xl:mb-20">
          <h4
            className={`text-2xl whitespace-nowrap font-black lg:absolute lg:top-10 xl:top-16  lg:text-6xl 2xl:text-7xl text-primary project-name
          ${idx % 2 === 0 ? "xl:-left-40 md:-left-40" : "xl:left-56 md:left-24"}
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
          <p className="mt-0 xl:leading-8 xl:text-lg text-secondary project-description lg:mt-4">
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

          <div className="flex items-center space-x-6 project-links-wrapper">
            {project.links.map((link) => (
              <a
                className={`text-${link.color} hover:text-${link.hoverColor} project-link`}
                key={project.name + "-" + link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
