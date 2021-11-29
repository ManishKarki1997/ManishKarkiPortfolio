/* eslint-disable @next/next/no-img-element */
import React from "react";

const SecondaryProject = ({ project }) => {
  return (
    <div className="px-4 py-4 shadow-2xl bg-secondary">
      <div className="w-full overflow-hidden rounded h-72">
        <img
          className="object-cover w-full h-full"
          src={project.featuredImage}
          alt=""
        />
      </div>

      <div className="my-4">
        <h3 className="mb-2 text-xl text-primary">{project.name}</h3>
        <p className="font-medium text-tertiary">{project.description}</p>
      </div>

      <div className="flex flex-wrap items-center my-4">
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
