import React from "react";

import usePrefersDarkMode from "./usePrefersDarkMode";
import useLocalStorage from "./useLocalStorage";

const localStorageThemeKey = "manish-karki-is-dark-theme";

const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();

  const [value, setValue] = useLocalStorage(localStorageThemeKey, true);

  const darkMode = value === undefined ? prefersDarkMode : value;

  React.useEffect(() => {
    const root = document.body;

    root.classList.remove(darkMode ? "light" : "dark");
    root.classList.add(darkMode ? "dark" : "light");
  }, [value, darkMode]);

  return [value, setValue];
};

export default useDarkMode;
