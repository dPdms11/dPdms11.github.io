/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  mode: 'jit',
  content: ['./src/pages/*.js', './src/components/*.js', './src/*.js', './src/pages/projects/*.js'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 60%': { opacity: 1 },
          '60.1%, 100%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1.1s cubic-bezier(0.5, 0.5, 1, 1) infinite',
      },
    },
  },
  plugins: [],
}