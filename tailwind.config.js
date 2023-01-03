/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yc1: "#F8991D",
        gc1: "#979797",
        gc2: "#E5E5E5",
        gc3: "#F2F2F2",
        gcCBCBCB: "#CBCBCB",
        ctgName: "#CBCBCB",
        black2: "#000000",
      },
      fontFamily: {
        montserat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
