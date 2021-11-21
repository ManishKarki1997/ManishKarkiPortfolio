import React from "react";
import Image from "next/image";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ project, idx }) => {
  return (
    <div
      className={`w-full mb-16 md:w-11/12 flex flex-col ${
        idx % 2 === 0 ? "items-start" : " ml-auto items-end"
      }`}
    >
      <div className="px-4 py-4 lg:px-24 md:px-8">
        <h4 className="text-xl font-semibold lg:text-3xl text-primary">
          {project.name}.
        </h4>
      </div>

      <div className="my-6 image-wrapper">
        <Image
          src={project.imageUrl}
          alt="Project Image"
          objectFit="cover"
          width="1000"
          height="500"
        />
      </div>
      <div
        className={`w-full px-4 py-4 lg:max-w-4xl lg:px-24 md:px-8 flex flex-col 
      ${idx % 2 === 0 ? "items-start" : " items-end"}
      `}
      >
        <p className="text-lg text-secondary">{project.description}</p>

        <div className="flex items-center my-6 space-x-4">
          {project.techStacks.map((stack) => (
            <p
              className="text-base font-medium text-accent"
              key={project.name + stack}
            >
              {stack}
            </p>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            className="cursor-pointer text-primary"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            className="cursor-pointer text-primary"
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
