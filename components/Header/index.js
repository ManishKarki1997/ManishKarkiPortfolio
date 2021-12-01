import React from "react";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import HamburgerMenu from "./HamburgerMenu";
import useDarkMode from "../../hooks/useDarkMode";
import useWindowSize from "../../hooks/useWindowSize";

const menuLinks = [
  {
    name: "Home",
    href: "/",
    content: `No place like home`,
  },
  {
    name: "Projects",
    href: "/projects",
    content: `See some of the stuffs I made`,
  },
  {
    name: "Blog",
    href: "/blog",
    content: `Just writing some things that I find interesting. Maybe something I learnt or some tutorials on how to do stuff`,
  },
  {
    name: "About Me",
    href: "/about-me",
    content: `Let's know something about me and what I do`,
  },
];

const Header = () => {
  const [navExpanded, setNavExpanded] = React.useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = React.useState(null);
  const navTimelineRef = React.useRef(null);
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [width] = useWindowSize();

  // so that i don't have to animate the letters when mega menu is toggled
  // otherwise, even if scroll way bottom and then clicked mega menu, these letters show up (due to gsap)
  const [isLettersAnimated, setIsLettersAnimated] = React.useState(false);

  const handleNavToggle = () => {
    setNavExpanded(!navExpanded);
    document.querySelector(".navigation")?.classList.add("z-50");
    if (!navExpanded) {
      navTimelineRef.current.timeScale(1).play();
    } else {
      navTimelineRef.current.timeScale(1.6).reverse();
    }
  };

  const circleHoverRef = React.useRef(null);

  React.useEffect(() => {
    navTimelineRef.current = gsap.timeline({
      paused: true,
    });

    circleHoverRef.current = gsap.to(".circle", {
      paused: true,
      scale: 1.1,
      duration: 0.5,
      ease: "power4.easeInOut",
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
      display: "block",
      duration: 0.7,
      ease: "Power1.easeInOut",
    });

    // don't animate on mobile device
    if (width > 640) {
      navTimelineRef.current.to(".letter-m", {
        ease: "power2.easeInOut",
        css: {
          zIndex: 25,

          transform: "translate(-50%,-50%)",
          top: "50%",
          left: "50%",
        },
      });
      navTimelineRef.current.to(
        ".circle .bottom",
        {
          ease: "power4.easeInOut",
          autoAlpha: 1,
          duration: 0.4,
          transform: "scaleY(1)",
        },
        "-=.5"
      );
      navTimelineRef.current.to(
        ".circle .top",
        {
          ease: "power4.easeInOut",

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
    }

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
  }, [isLettersAnimated, width]);

  return (
    <>
      {/* <MobileMenu /> */}
      <nav className="fixed top-0 right-0 z-50 hidden w-full h-screen opacity-0 bg-primary navigation">
        <div className="circle-wrapper">
          <div
            onMouseOver={() => circleHoverRef.current.play()}
            onMouseLeave={() => circleHoverRef.current.reverse()}
            className="opacity-0 circle"
          >
            <span className="top"></span>
            <span className="bottom"></span>
          </div>
        </div>

        <div className="container flex w-full h-full lg:items-center">
          <ul className="flex flex-col justify-center w-full lg:w-1/2 menu-links lg:justify-start">
            {menuLinks.map((menuItem) => (
              <li
                key={menuItem.href}
                className="mb-8 text-2xl font-black uppercase opacity-0 menu-link lg:text-6xl"
              >
                <Link passHref href={menuItem.href}>
                  <a
                    onFocus={() => setHoveredMenuItem(menuItem)}
                    onMouseEnter={() => setHoveredMenuItem(menuItem)}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className="text-tertiary"
                  >
                    <span
                      data-menu-text={menuItem.name}
                      className="menu-link-text"
                    >
                      {menuItem.name}
                    </span>
                  </a>
                </Link>
              </li>
            ))}

            <li className="mb-8 opacity-0 not-menu-link resume-li">
              <a
                href="https://www.dropbox.com/s/faekcb6qqr533qg/Resume.pdf?dl=1"
                target="_blank"
                download
                rel="noopener noreferrer"
                className="px-4 py-1 text-2xl font-black text-white uppercase lg:text-6xl bg-accent"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="flex-col items-end justify-center hidden w-full h-full py-16 md:flex lg:w-1/2">
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

      <header className="fixed top-0 left-0 z-50 w-full h-24 py-6 md:block">
        <div className="container flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/">
            <h1 className="mt-1 font-bold text-primary brand-name">
              <span className="fixed text-5xl text-primary letter-m top-3">
                M
              </span>

              {/* <span className="hidden mb-2 text-2xl lg:ml-11 md:ml-11 brand-letter md:inline-block">
                a
              </span>
              <span className="hidden text-2xl brand-letter md:inline-block">
                n
              </span>
              <span className="hidden text-2xl brand-letter md:inline-block ">
                i
              </span>
              <span className="hidden text-2xl brand-letter md:inline-block ">
                s
              </span>
              <span className="hidden text-2xl brand-letter md:inline-block ">
                h
              </span> */}
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
