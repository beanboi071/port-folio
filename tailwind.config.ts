import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#050505",
        secondary: "#360058",
        tertiary: "#282828",
        light: "#FAFFFD",
      },
      fontFamily: {
        'global': ['"system-ui"'],
        'cursive': ['"Brush Script MT"'],
        'nice': ['"Optima"'],


      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  mode: 'jit',
  corePlugins: {
    rotate: true,
  },
  plugins: [],
};
export default config;
