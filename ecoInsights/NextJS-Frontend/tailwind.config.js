/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          "0%": { height: "0px", opacity: "0" },
          "100%": { height: "100%", opacity: "1" },
        },
        leftright: {
          "0%": { marginLeft: "20px" },
          "100%": { marginRight: "0px" },
        },
      },
      animation: {
        slidein: "slidein .3s ease-in-out",
        leftright: "leftright 1s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
