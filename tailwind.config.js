module.exports = {
  prefix: '',
  purge: {
    enabled: false,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        'xxl': '1550px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),
    function ({addUtilities}) {
      const newUtilities = {
        '.text-lg': {
          'font-size':'1.125rem'
        },
        '.text-md': {
          'font-size':'1rem'
        },
        '.text-sm': {
          'font-size':'.875rem'
        },
        '.text-xs': {
          'font-size':'.750rem'
        },
        '.min-h-500': {
          'min-height':'500px'
        },
        '.max-h-500': {
          'max-height':'500px'
        },
        '.min-h-700': {
          'min-height':'700px'
        },
        '.max-h-700': {
          'max-height':'700px'
        },
      };

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      })
    }],
};
