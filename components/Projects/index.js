import React from "react";

import Project from "./Project";

const projects = [
  {
    name: "Mountain",
    imageUrl:
      "https://images.unsplash.com/photo-1637319894739-66e54d82adc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    description: `
          When she reached the first hills of the Italic Mountains, she had a
          last view back on the skyline of her hometown Bookmarksgrove, the
          headline of Alphabet Village and the subline of her own road, the Line
          Lane. Pityful a rethoric question ran over her cheek, then she
          continued her way`,
    techStacks: ["Vue", "Tailwind", "Node", "Postgres"],
    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
  },
  {
    name: "Evening City",
    imageUrl:
      "https://images.unsplash.com/photo-1627444479551-ea349f763e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    description: `
    On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.`,
    techStacks: ["Nuxt", "Tailwind", "Node", "Mongodb"],

    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
  },
  {
    name: "Sea Road",
    imageUrl:
      "https://images.unsplash.com/photo-1636649314542-9ca27f901803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    description: `
    But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.`,
    techStacks: ["Nuxt", "Equal UI", "Node", "Postgres"],
    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
  },
  {
    name: "Hill",
    imageUrl:
      "https://images.unsplash.com/photo-1605241577524-5fd5e41fca65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
    description: `
    It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    techStacks: ["Nuxt", "SCSS", "Node", "Firebase"],
    links: {
      github: "https://github.com",
      demo: "https://github.com",
    },
  },
];

const Projects = () => {
  return (
    <div className="w-full">
      {projects.map((project, idx) => (
        <Project key={project.name} idx={idx} project={project} />
      ))}
    </div>
  );
};

export default Projects;
