import React from "react";

const isBrowser = typeof window !== "undefined";

const useScrollY = () => {
  const [scrollY, setScrollY] = React.useState(isBrowser ? window.scrollY : 0);

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

export default useScrollY;
