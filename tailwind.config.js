/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          blue: '#03045E',
          brown: '#474306',
        },
        light: {
          yellow: '#FBF8CC',
        },
        yellow: '#F5EE84',
      },
    },
  },
  plugins: [],
}
