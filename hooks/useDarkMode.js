import { useContext } from "react";
import { ThemeContext } from "../providers/theme-provider";

const useDarkMode = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }

  return [context.isDarkMode, context.setIsDarkMode];
};

export default useDarkMode