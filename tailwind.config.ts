import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1E3B2C",
        "forest-deep": "#122619",
        grass: "#5B8C5A",
        "grass-soft": "#EAF1E7",
        gold: "#C99A3D",
        "gold-soft": "#F6EAD1",
        ink: "#1C2B22",
        paper: "#F7F5EE",
        "paper-dim": "#EFEBDF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-plex-thai)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
