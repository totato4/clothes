/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: "1144px",
    },
    extend: {
      colors: {
        yc1: "#F8991D",
        gc1: "#979797",
        gc2: "#E5E5E5",
        gcE5: "#E5E5E5",
        gc3: "#F2F2F2",
        gcC4: "#C4C4C4",
        gcCBCBCB: "#CBCBCB",
        ctgName: "#CBCBCB",
        black2: "#000000",
      },
      fontFamily: {
        montserat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        Category1: "minmax(145px, 188px) minmax(400px, 911px)",
      },
      animation: {
        menuShow: "show-animation 1s forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
