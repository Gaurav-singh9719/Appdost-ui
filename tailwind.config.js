module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8'
        },
        accent: '#06B6D4'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(2,6,23,0.08)'
      }
    }
  },
  plugins: []
}
