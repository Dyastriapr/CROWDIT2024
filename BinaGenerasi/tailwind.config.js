/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#55ACD0",
        desktop: "#FAFAFA",
      },
      lineHeight: {
        custom: "1.5", // atau nilai apa pun yang sesuai dengan desain Anda
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
