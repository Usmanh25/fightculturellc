/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'med': '875px',
      // => @media (min-width: 860px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        unifrakturCook: "UnifrakturCook, cursive",
        mochiyPopOne: "Mochiy Pop One, sans-serif",
        bungeeInline: "Bungee Inline, cursive",
        rubikDirt: "Rubik Dirt, cursive",
      },
      backgroundImage: {
        'white-brick-wall': "url('/images/white-brick-wall.jpg')",
        'black-brick-wall': "url('/images/black-brick-wall.jpg')",
        'fight-culture-black-logo': "url('/images/FightCultureBlackLogo.png')"
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
        fadeIn: 'fadeIn 2s both',
        fadeInFast: 'fadeIn 0.3s both'
      }
    }
  }
}
