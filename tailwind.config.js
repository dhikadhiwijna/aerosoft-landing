/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "black-be": "#222326",
        "orange-be": "#ff6016",
        "lightorange-be": "#ef8559",
        "red-be":"#ff2f42",
        "white-be": "#fafafa",
        "darkgray-be": "#97979b",
        "lightgray-be": "#c7c7ca",
      },
    },
  },
  plugins: [],
}
