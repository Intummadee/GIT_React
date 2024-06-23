/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // 👇🏼 https://tailwindcss.com/docs/background-color สามารถเรียกใช้สีได้ด้วยการเติมใน class เลยว่า `bg-primary`
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        sky:"#028BA9",
        darksky:"#044C5C",
        blue:"#044c5c",
        darkblue:"#042c34",
        verydarkblue: "#041a2a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // 👇🏼 https://tailwindcss.com/docs/background-image สามารถเรียกใช้สีได้ด้วยการเติมใน class เลยว่า `bg-hero-pattern`
      backgroundImage: {
        "hero-pattern": "url('https://t4.ftcdn.net/jpg/02/61/91/71/360_F_261917142_AthgSu36emNXAfSgc8bgfYhAsQi1LLnL.jpg')",
      },
    },
  },
  plugins: [],
};











