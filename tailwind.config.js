/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluedark: "var(--bluedark)",
        green: "var(--green)",
        textclr: "var(--textclr)",
        blackish: "var(--black)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        mulish: ["var(--font-mulish)", "sans-serif"],
      },
      borderRadius: {
        "tr-lg": "30px 10px 10px 10px",
        "tl-lg": "10px 30px 10px 10px",
      },
    },
  },
  plugins: [],
};
