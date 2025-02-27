const config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          move: "move 5s linear infinite",
        },
        keyframes: {
          move: {
            "0%": { transform: "translateX(-200px)" },
            "100%": { transform: "translateX(200px)" },
          },
        },
      },
    },
    plugins: [require("tailwind-scrollbar-hide")], // ✅ Make sure this is included
  };
  
  export default config;
  