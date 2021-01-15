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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
