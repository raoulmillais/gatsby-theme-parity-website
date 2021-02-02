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
        parityBlack: '#111',
        parityWhite: '#F1F3F2',
        parityBorder: '#3c3c3c',
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
        'hero-pattern': "url('/static/557b8cb650f0e1d42e36c3f4e835157f/bg-light-1.png')",
        'hero-pattern-2': "url('/static/09e985c54341462df605eac6e087597a/bg-light-2.png')",
        'hero-pattern-dark': "url('/static/c98ac65387f53c43a8707c6896f83156/bg-dark-1.png')",
        'hero-pattern-dark-2': "url('/static/b23115c5994bd4e03e92cacbce64596b/bg-dark-2.png')",
        'hero-about': "url('/static/f69105b970b81cf684de4f6034c0715b/bg-red-1.jpg')",
        'hero-substrate': "url('/static/ce5b81541c8ca4cffdbc9cf9c1359ad4/cover-substrate-wave-3.jpg')",
        'hero-signer': "url('/static/9b2215633dbb04573ca682776338626d/cover-parity-signer.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
