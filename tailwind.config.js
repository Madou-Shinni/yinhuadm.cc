/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        's': '12px',
        'm': '14px',
        'l': '16px',
        'xl': '18px',
        '2xl': '20px',
      },
      colors: {
        'text': '#333333',
      }
    },
  },
  plugins: [],
}

