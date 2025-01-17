/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1D2671",
        "custom-pink": "#C33764",
        "custom-gray": "#404040",
        "custom-bar-hover": "#16203a",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".caret-custom": {
          caretColor: "#3490dc", // Custom caret color
        },
      });
    },
  ],
};
