/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        unifrakturCook: "UnifrakturCook, cursive",
        mochiyPopOne: "Mochiy Pop One, sans-serif"
      },
      backgroundImage: {
        'white-brick-wall': "url('/images/white-brick-wall.jpg')",
        'black-steel-wallpaper': "url('/images/black_steel_wallpaper.jpg')"
      },
      colors: {
        'blue': '#243c5a',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s both'
      }
    } 
  }
}
