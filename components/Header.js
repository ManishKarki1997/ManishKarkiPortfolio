import React from "react";
import Link from "next/link";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useDarkMode from "../hooks/useDarkMode";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  React.useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none reverse",
        start: "top -50",
        end: 99999,
        trigger: "header",
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

  return (
    <header className="bg-primary sticky top-0 left-0 w-full z-50 py-6 ">
      <div className="container flex items-center justify-between">
        <div>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/">
            <h1 className="font-bold text-primary brand-name">
              <span className="text-5xl text-primary">M</span>

              <span className="text-2xl brand-letter ">a</span>
              <span className="text-2xl brand-letter ">n</span>
              <span className="text-2xl brand-letter ">i</span>
              <span className="text-2xl brand-letter ">s</span>
              <span className="text-2xl brand-letter ">h</span>
            </h1>
          </Link>
        </div>

        {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button> */}
      </div>
    </header>
  );
};

export default Header;
