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
          DEFAULT: '#0065BD',
          light: '#3498db',
          dark: '#004d8c',
        },
        secondary: {
          DEFAULT: '#2ecc71',
          light: '#4cd486',
          dark: '#27ae60',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      boxShadow: {
        custom: '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}