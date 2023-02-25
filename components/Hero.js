import React from "react";
import gsap from "gsap/dist/gsap";
import { useInView } from "react-intersection-observer";

import { MdOutlineWavingHand } from "react-icons/md";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineFilePdf,
} from "react-icons/ai";

import useWindowSize from "../hooks/useWindowSize";

const Hero = () => {
  const [width] = useWindowSize();
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const [shouldTriggerLinksAnim, setShouldTriggerLinksAnim] =
    React.useState(false);

  //   taken from https://codepen.io/GreenSock/pen/eYJLOdj
  // basically, used this to change the position of the profile links from current position to the fixed position(bottom left element)
  function flip(elements, changeFunc, vars) {
    elements = gsap.utils.toArray(elements);
    vars = vars || {};
    let tl = gsap.timeline({
      onComplete: vars.onComplete,
      delay: vars.delay || 0,
    }),
      bounds = elements.map((el) => el.getBoundingClientRect()),
      copy = {},
      p;
    elements.forEach((el) => {
      el._flip && el._flip.progress(1);
      el._flip = tl;
    });
    changeFunc();
    for (p in vars) {
      p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
    }
    copy.x = (i, element) =>
      "+=" + (bounds[i].left - element.getBoundingClientRect().left);
    copy.y = (i, element) =>
      "+=" + (bounds[i].top - element.getBoundingClientRect().top);
    return tl.from(elements, copy);
  }

  const swapFn = React.useCallback(() => {
    if (shouldTriggerLinksAnim) {
      [...Array.from(document.querySelectorAll(".hero-link"))].map((el) => {
        document.querySelector(".fixed-links-wrapper").appendChild(el);
      });
    } else {
      [...Array.from(document.querySelectorAll(".hero-link"))].map((el) => {
        document.querySelector(".hero-links-wrapper").appendChild(el);
      });
    }
  }, [shouldTriggerLinksAnim]);

  React.useEffect(() => {
    // don't animate for screen sizes < 768
    if (width < 768) return;

    setShouldTriggerLinksAnim(inView ? false : true);
    flip([...Array.from(document.querySelectorAll(".hero-link"))], swapFn);
  }, [inView, swapFn, width]);

  return (
    <div
      ref={ref}
      className="w-full py-32 mx-auto lg:max-w-2xl bodyContainer bg-primary"
    >
      <div className="flex items-center">
        <p>Hi,</p>
        <div className="ml-1 mr-2 text-accent">
          <MdOutlineWavingHand size={24} />
        </div>
        <p>I&apos;m</p>
      </div>
      <h2 className="px-0 mt-2 ml-0 text-3xl font-black lg:-ml-1 md:text-8xl text-primary">
        Manish Karki
      </h2>

      <p className="mt-1 text-lg">
        An aspiring fullstack web developer eager for new opportunities
      </p>

      <div className="flex items-center mt-6 space-x-6 hero-links-wrapper">
        <a
          // href="https://www.dropbox.com/s/fgit5rd5flq0i3o/Manish%20Karki%20Resume.pdf?dl=1"
          href="https://www.dropbox.com/s/3xxkqcbs6hslahv/Manish%20Karki%202.pdf?dl=1"
          className=" text-primary hover:text-gray-600 hero-link"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <AiOutlineFilePdf size={24} />
        </a>

        <a
          className=" text-primary hover:text-gray-600 hero-link"
          href="https://github.com/ManishKarki1997"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={24} />
        </a>
        <a
          className=" text-primary hover:text-blue-500 hero-link"
          href="https://www.linkedin.com/in/manish-karki-179a181b5/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={24} />
        </a>
        <a
          className=" text-primary hover:text-blue-500 hero-link"
          href="https://twitter.com/manishkarki247"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
