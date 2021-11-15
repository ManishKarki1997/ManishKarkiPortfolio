import React from "react";

const usePrefersDarkMode = () => {
  const [prefersDark, setPrefersDark] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");
    setPrefersDark(mediaQuery.matches);

    const onMediaChange = () => setPrefersDark(mediaQuery.matches);

    mediaQuery.addEventListener("change", () => onMediaChange);

    return () => mediaQuery.removeEventListener("change", onMediaChange);
  }, []);

  return prefersDark;
};

export default usePrefersDarkMode;
