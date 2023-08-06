/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          blue: '#03045E',
          brown: '#474306',
        },
        yellow: '#F5EE84',
        light: {
          yellow: '#FBF8CC',
        },
      },
    },
  },
  plugins: [],
}
