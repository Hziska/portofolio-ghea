/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    
    extend: {
      container:{
        center: true,
        padding:'16px',
      },
      colors:{
        'pink':'#D63484',
        'dark':'#0f172a',
        'secondary':'#64748b'
      },
      screens:{
        'xl':'1320px',
      }
    },
  },
  plugins: [],
}

