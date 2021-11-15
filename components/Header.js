import React from "react";
import Link from "next/link";

import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 transition-all duration-300 h-36 bg-primary lg:px-36 md:px-24">
      <div>
        {/* eslint-disable-next-line @next/next/link-passhref */}
        <Link href="/">
          <h1 className="font-bold text-primary brand-name">
            <span className="text-5xl text-primary">M</span>
            <span className="text-2xl ">a</span>
            <span className="text-2xl ">n</span>
            <span className="text-2xl ">i</span>
            <span className="text-2xl ">s</span>
            <span className="text-2xl ">h</span>
          </h1>
        </Link>
      </div>

      {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button> */}
    </header>
  );
};

export default Header;
