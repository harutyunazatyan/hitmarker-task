module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'lg': '1.125rem',
        '3xl': '1.75rem',
        '4xl': '2.625rem',
        '5xl': '54px'
      },
      borderRadius: {
        'lg': '10px'
      },
      boxShadow: {
        '3xl': '32px 49px 80px rgba(125, 149, 169, 0.12);',
        'inner': 'inset 0px -6px 8px rgba(12, 65, 109, 0.08)',
        'inner-2': 'inset 0px -6px 8px rgba(12, 65, 109, 0.08), inset 0px 4px 8px rgba(8, 46, 78, 0.25)',
        'white': ' 0px 4px 4px rgba(0, 0, 0, 0.09)'
      },
      lineHeight: {
        '11': '52px',
        '12': '64px',
        'df': '1.6'
      },
      maxWidth: {
        'xxl': '1170px',
      },
      backgroundColor: {
        'primary': '#FF6810',
        'black-df': '#19191B'
      },
      borderColor: {
        'primary': '#FF6810',
        'secondary': '#2E2E46'
      },
      colors: {
        'white-90': 'rgba(255, 255, 255, 0.9)',
        'secondary': '#2E2E46',
        'secondary-80': 'rgba(46, 46, 70, 0.8)',
        'footer-link': '#222831',
        'footer-link-90': 'rgba(34, 40, 49, 0.9)',
        'subtitle-60': 'rgba(45, 49, 64, 0.6)',
        'description': '#828282'
      },
      borderWidth: {
        '12': '12px'
      },
      padding: {
        '18': '4.5rem'
      },
      margin: {
        '-76': '-19.5rem'
      },
      width: {
        '30': '7.5rem'
      },
      height: {
        '30': '7.5rem',
        '90': '90%',
        '110': '110px',
        '496': '496px'
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1200px'
        }
      }
    },


  },
  variants: {
    extend: {},
  },
  plugins: [],
}
