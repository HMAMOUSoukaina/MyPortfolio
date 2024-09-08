/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(to bottom, #35396c, #374b7d, #3a5d8c, #406f99, #4a81a6, #5a8cb0, #6a98ba, #79a3c4, #8daacd, #a1b2d4, #b4badb, #c5c2e1)',
      },
      
    },
  },
  plugins: [
    
  ],
};

export default tailwindConfig;
