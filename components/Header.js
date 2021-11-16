import React from "react";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HiMenuAlt4 } from "react-icons/hi";

import useDarkMode from "../hooks/useDarkMode";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [navExpanded, setNavExpanded] = React.useState(false);
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
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none reverse",
        start: "top -50",
        end: 99999,
        trigger: "header",
        onEnter: () => {
          setIsLettersAnimated(true);
        },
        onLeaveBack: () => {
          setIsLettersAnimated(false);
        },
      },
    });

    t1.to(".brand-letter", {
      ease: "power4.easeInOut",
      autoAlpha: 0,
      duration: 0.5,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  React.useEffect(() => {
    navTimelineRef.current = gsap.timeline({
      paused: true,
    });

    if (!isLettersAnimated) {
      navTimelineRef.current.to(".brand-letter", {
        reversed: false,
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

    navTimelineRef.current.to(
      "body",
      {
        overflow: "hidden",
        duration: 0.5,
        ease: "Power4.easeInOut",
      },
      "-=0.5"
    );

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
      transform: "rotate(15deg)",
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
  }, [isLettersAnimated]);

  return (
    <>
      {/* w-full h-screen */}
      <nav className="fixed top-0 right-0 w-full h-screen opacity-0 bg-primary z-25 navigation">
        <div className="circle-wrapper">
          <div className="opacity-0 circle">
            <span className="top"></span>
            <span className="bottom"></span>
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

          <button
            onClick={() => handleNavToggle()}
            className="cursor-pointer text-primary menu-btn"
          >
            <HiMenuAlt4 size={24} className="fill-current" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
