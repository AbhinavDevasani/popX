/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        popx: {
          primary: '#6C25FF',
          secondary: '#E0DEFF', // Very light lavender/purple matching the button background in Welome page
          secondaryText: '#1D2939', // Dark text color for the secondary button
          textDark: '#1D2229', // Deep dark color for headings
          textGray: '#667085', // Muted gray text
          borderGray: '#D0D5DD', // Light gray border
          bgLight: '#F7F8FA', // Page background color
        }
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
