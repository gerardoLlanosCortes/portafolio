import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whiteFull: "#FFF",
        whiteDarker: "#A7A7A7",
        black: "#1B1B1B",
        blackFull: "#0D0D0D",
        lightBlue: "#79D7FD",
        skyBlue: "#00BBFA",
        blue: "#001736",
        blueDark: "#00183E",
        gold: "#FFC54A",
      },
      width: {
        mobile: "90%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        inconsolata: "var(--font-inconsolata)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
