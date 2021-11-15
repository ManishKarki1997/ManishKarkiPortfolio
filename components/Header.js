import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <header>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
    </header>
  );
};

export default Header;
