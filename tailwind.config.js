module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
        primaryOpposite: "var(--color-bg-primary-opposite)",
        secondaryOpposite: "var(--color-bg-secondary-opposite)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        accent: "var(--color-text-accent)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "group-hover"],
      scale: ["hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
