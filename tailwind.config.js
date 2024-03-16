/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mob-L": "425px",
        "mob-M": "375px",
        "mob-S": "320px",
        "1K": "1500px",
        "2K": "1920px",
        "3K": "2300px",
        "4K": "2560px",
      },
    },
  },
  plugins: [],
};
