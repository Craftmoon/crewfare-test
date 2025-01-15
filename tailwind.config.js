/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4323FF',
        },
        secondary: {
          DEFAULT: '#221c35',
        },
      },
    },
  },
  plugins: [],
};
