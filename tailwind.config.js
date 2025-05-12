// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jost: ['sans-serif'],
      },
    },
  },
  // pastikan content-nya sesuai
  content: ["src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
}
