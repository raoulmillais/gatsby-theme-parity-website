module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        parityPink: '#FF1864',
        parityRed: '#CC1350',
        parityGray: '#eff1f0',
        textDark: '#282828',
        textLight: '#757575',
        navItemColor: '#b4b5b1',
        footerDark: '#1b1b1b',
        footerLight: '#282828',
      },
      fontFamily: {
        title: ['ManifoldCF', 'Helvetica', 'Arial', 'sans'],
        body: ['Roboto', 'Helvetica', 'Arial', 'sans'],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/static/bg-light-1-557b8cb650f0e1d42e36c3f4e835157f.png')",
        'hero-pattern-2': "url('/static/09e985c54341462df605eac6e087597a/bg-light-2.png')",
        'hero-pattern-dark': "url('/static/c98ac65387f53c43a8707c6896f83156/bg-dark-1.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
