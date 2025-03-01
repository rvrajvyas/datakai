import {heroui} from '@heroui/theme';

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js"
  ],
  theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite",
      },
      fontFamily: {
        // Override the default sans font family
        sans: ['Cool', 'system-ui', 'sans-serif'],
        // Keep your other custom fonts
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), heroui()],
};

export default config;  