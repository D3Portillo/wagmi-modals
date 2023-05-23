/** @type { import('tailwindcss').Config } */
module.exports = {
  content: [
    "./pages/*.{tsx,js}",
    "./pages/**/*.{tsx,js}",
    "./components/*.{tsx,js}",
    "./components/**/*.{tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        kakao: {
          purple: "#8312F5",
          blue: "#3b82f6",
        },
      },
      backgroundImage: {
        "gradient-kakao":
          "linear-gradient(73.28deg, rgb(73, 91, 252) 6.51%, rgb(63, 133, 238) 88.45%);",
      },
    },
  },
  plugins: [],
}
