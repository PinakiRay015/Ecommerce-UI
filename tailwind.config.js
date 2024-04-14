/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens :
      {
        'md' : '976px',
        'lg' : '1135px',
        'xl' : '1159px'
      }
    },
    fontFamily:{
      'inter' : ['Inter'],
      'poppins' : ['Poppins']
    }
  },
  plugins: [],
}

