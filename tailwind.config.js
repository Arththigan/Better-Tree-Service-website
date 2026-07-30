/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0b110d",
          900: "#101713",
          800: "#18221b",
          700: "#233228",
          600: "#314538"
        },
        leaf: {
          300: "#a8d978",
          400: "#83c954",
          500: "#65ad3c",
          600: "#4b8e2b"
        },
        bark: "#d99b45",
        cream: "#f5f1e8"
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 70px rgba(101, 173, 60, .16)"
      }
    }
  },
  plugins: []
};
