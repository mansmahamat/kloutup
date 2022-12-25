/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        wallpaper: "url('/images/wallpaperflare.com_wallpaper.jpg')",
      }),
      fontFamily: {
        inter: ['"Inter"'],
        merriweather: ['"Merriweather"'],
      },
      animatedSettings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 500,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 500,
        classes: ["bounce", "heartBeat"],
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("tailwindcss-animatecss"),
  ],
}
