export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      hueRotate: {
        30: "30deg"
      },
      rotate: {
        5: "5deg",
        m5: "-5deg"
      }
    },
  },
  plugins: [
  ],
};

