/* eslint-disable @next/next/no-img-element */
import React from "react";
import gsap from "gsap/dist/gsap";
import { useInView } from "react-intersection-observer";

const SecondaryProject = ({ project, idx }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const projectTimelineRef = React.useRef(null);

  React.useEffect(() => {
    projectTimelineRef.current = gsap.timeline({
      paused: true,
    });

    projectTimelineRef.current.fromTo(
      `.secondary-project-${idx + 1}`,
      {
        autoAlpha: 0,
        y: 40,
      },
      {
        autoAlpha: 1,
        y: 20,
        duration: 0.5,
        delay: idx * 0.5,
        ease: "sine.inOut",
      }
    );

    return () => projectTimelineRef.current.kill();
  }, [idx]);

  React.useEffect(() => {
    if (inView) {
      projectTimelineRef.current.play();
    } else {
      projectTimelineRef.current.timeScale(1.5).reverse();
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`px-4 py-4 shadow-2xl bg-secondary secondary-project-${
        idx + 1
      }`}
    >
      <div className="w-full overflow-hidden rounded h-72">
        <img
          className="object-cover w-full h-full"
          src={project.featuredImage}
          alt=""
        />
      </div>

      <div className="my-6">
        <h3 className="mb-2 text-xl text-primary">{project.name}</h3>
        <p className="font-medium text-tertiary">{project.description}</p>
      </div>

      <div className="flex flex-wrap items-center my-6">
        {project.techStacks.map((stack) => (
          <p
            className="mb-1 mr-3 text-sm text-accent"
            key={project.name + "-" + stack}
          >
            {stack}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center space-x-6">
        {project.links.map((link) => (
          <a
            className={`text-${link.color} hover:text-${link.hoverColor}`}
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
  );
};

export default SecondaryProject;
