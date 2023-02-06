module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B73E8",
      },
    },
    backgroundImage: {
      starwars: "url('/src/components/images/swbackground.jpeg')",
      logo: "url('/src/components/images/logo.png')",
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
          transform: "translateX(20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-30px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      "fade-in": "fade-in .6s ease-out",
      "fade-down": "fade-down .5s ease-in",
    },
  },
  plugins: [require("flowbite/plugin")],
};
