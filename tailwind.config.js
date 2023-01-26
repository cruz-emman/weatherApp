module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
}
