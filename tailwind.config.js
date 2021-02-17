const { theme } = require("tailwindcss/defaultConfig");

module.exports = {
  theme: {
    extend: {
      colors: {
        main: "#3880ff" // #38b2ac
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
  // ...
};
