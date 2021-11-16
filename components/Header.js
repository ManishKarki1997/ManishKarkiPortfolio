import React from "react";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import HamburgerMenu from "./HamburgerMenu";
import useDarkMode from "../hooks/useDarkMode";

const menuLinks = [
  {
    name: "Home",
    href: "/",
    content: `No place like home`,
  },
  {
    name: "Projects",
    href: "/projects",
    content: "See some of the stuffs I made",
  },
  {
    name: "Blog",
    href: "/blog",
    content:
      "Just writing some things that I find interesting. Maybe something I learnt or some tutorials on how to do stuff",
  },
  {
    name: "About Me",
    href: "/about-me",
    content: "Let's know something about me and what I do",
  },
];

const Header = () => {
  const [navExpanded, setNavExpanded] = React.useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = React.useState(null);

  // so that i don't have to animate the letters when mega menu is toggled
  // otherwise, even if scroll way bottom and then clicked mega menu, these letters show up (due to gsap)
  const [isLettersAnimated, setIsLettersAnimated] = React.useState(false);

  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const navTimelineRef = React.useRef(null);

  const handleNavToggle = () => {
    setNavExpanded(!navExpanded);

    if (!navExpanded) {
      navTimelineRef.current.play();
    } else {
      navTimelineRef.current.reverse();
    }
  };

  React.useEffect(() => {
    navTimelineRef.current = gsap.timeline({
      paused: true,
    });

    if (!isLettersAnimated) {
      navTimelineRef.current.to(".brand-letter", {
        ease: "power4.easeInOut",
        autoAlpha: 0,
        duration: 0.05,
        stagger: {
          amount: 0.1,
        },
      });
    }

    navTimelineRef.current.to(".navigation", {
      transformOrigin: "center right",
      autoAlpha: 1,
      // width: "100vw",
      // height: "100vh",
      duration: 0.7,
      ease: "Power1.easeInOut",
    });

    navTimelineRef.current.to(".letter-m", {
      ease: "power4.easeInOut",
      css: {
        zIndex: 25,
        // position: "fixed",
        transform: "translate(-50%,-50%)",
        top: "50%",
        left: "50%",

        // marginLeft: "-8px",
      },
    });

    navTimelineRef.current.to(
      ".circle .bottom",
      {
        autoAlpha: 1,
        duration: 0.4,
        transform: "scaleY(1)",
      },
      "-=.5"
    );
    navTimelineRef.current.to(
      ".circle .top",
      {
        autoAlpha: 1,
        duration: 0.4,
        transform: "scaleY(1)",
      },
      "-=.5"
    );

    navTimelineRef.current.to(".circle", {
      autoAlpha: 1,
      transform: "rotate(20deg)",
    });

    navTimelineRef.current.to(
      ".menu-btn",
      {
        marginRight: "14px",
        duration: 1,
        ease: "Power4.easeInOut",
      },
      "-=1"
    );

    navTimelineRef.current.to(".menu-links li", {
      ease: "power4.easeInOut",
      autoAlpha: 1,
      x: 20,
      duration: 0.5,
      stagger: {
        amount: 0.2,
      },
    });

    navTimelineRef.current.to(".my-name", {
      ease: "power4.easeInOut",
      autoAlpha: 1,
      y: -8,
      duration: 0.5,
    });

    navTimelineRef.current.to(".social-icons a", {
      ease: "power4.easeInOut",
      autoAlpha: 1,
      x: -8,
      duration: 0.5,
      stagger: {
        amount: 0.2,
      },
    });
  }, [isLettersAnimated]);

  return (
    <>
      {/* w-full h-screen */}
      <nav className="fixed top-0 right-0 w-full h-screen opacity-0 bg-primary z-25 navigation">
        {/* <nav className="fixed top-0 right-0 w-full h-screen opacity-1 bg-primary z-25 navigation"> */}
        <div className="circle-wrapper">
          <div className="opacity-1 circle">
            <span className="top"></span>
            <span className="bottom"></span>
          </div>
        </div>

        <div className="container flex w-full h-full lg:items-center">
          <ul className="w-full lg:w-1/2 menu-links">
            {menuLinks.map((menuItem) => (
              <li
                onFocus={() => setHoveredMenuItem(menuItem)}
                onMouseEnter={() => setHoveredMenuItem(menuItem)}
                onMouseLeave={() => setHoveredMenuItem(null)}
                key={menuItem.href}
                className="mb-8 text-2xl font-black uppercase opacity-0 menu-link lg:text-6xl text-primary"
              >
                <Link href={menuItem.href}>{menuItem.name}</Link>
              </li>
            ))}

            <li className="mb-8 opacity-0 not-menu-link resume-li">
              <button className="text-2xl font-black uppercase lg:text-6xl text-primary">
                Resume
              </button>
            </li>
          </ul>

          <div className="flex flex-col items-end justify-center w-full h-full py-16 lg:w-1/2">
            <div className="w-9/12 px-4 py-4 mt-auto hover-content justify-self-center ">
              {hoveredMenuItem && (
                <p className="text-lg font-semibold text-secondary">
                  {hoveredMenuItem.content}
                </p>
              )}
            </div>

            <div className="mt-auto">
              <h4 className="text-xl font-semibold translate-y-3 opacity-0 text-primary my-name">
                Manish Karki
              </h4>

              <div className="flex items-center justify-end mt-2 space-x-6 translate-x-3 social-icons">
                <a
                  className="opacity-0 text-primary hover:text-gray-600"
                  href="https://github.com/ManishKarki1997"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={24} />
                </a>
                <a
                  className="opacity-0 text-primary hover:text-blue-600"
                  href="https://twitter.com/manishkarki247"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="fixed top-0 left-0 z-50 w-full h-24 py-6 ">
        <div className="container flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/">
            <h1 className="font-bold text-primary brand-name ">
              <span className="fixed text-5xl text-primary letter-m top-2">
                M
              </span>

              <span className="mb-2 text-2xl lg:ml-11 md:ml-11 brand-letter">
                a
              </span>
              <span className="text-2xl brand-letter ">n</span>
              <span className="text-2xl brand-letter ">i</span>
              <span className="text-2xl brand-letter ">s</span>
              <span className="text-2xl brand-letter ">h</span>
            </h1>
          </Link>

          <HamburgerMenu
            navExpanded={navExpanded}
            handleNavToggle={handleNavToggle}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
