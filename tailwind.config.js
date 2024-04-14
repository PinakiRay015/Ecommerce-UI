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
        'sm' : '600px',
        'md' : '755px',
        'lg' : '976px',
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

