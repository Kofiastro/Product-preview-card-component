/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
        fontFamily:{
          montserat:['Montserrat','sans-serif'],
          fraunces:['Fraunces','serif'],
        },
        colors:{
          DarkCyan: 'hsl(158, 36%, 37%)',
          Cream: 'hsl(30, 38%, 92%)',
          VerydarkBlue: 'hsl(212, 21%, 14%)',
          DarkGrayishBlue: 'hsl(228, 12%, 48%)',
          White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

