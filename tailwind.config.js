/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f8b86d',
          400: '#f59332',
          500: '#f3750a',
          600: '#e45a05',
          700: '#bd4408',
          800: '#96360e',
          900: '#792d0f',
        }
      }
    },
  },
  plugins: [],
}