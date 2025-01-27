import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        'instagram': '0 4px 15px rgba(225, 48, 108, 0.5)', // Custom shadow with Instagram color
      },
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
        'nice': ['"Open Sans"'],
        'futuristic': ['"Eurostile"']
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
  variants: {
    extend: {
      boxShadow: ['hover'], // Enable hover variant for boxShadow
    },
  },
  plugins: [],
};
export default config;
