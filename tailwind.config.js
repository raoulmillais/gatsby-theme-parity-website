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
        'hero-pattern': "url('./background-images/bg-light-1.png')",
        'hero-pattern-2': "url('./background-images//bg-light-2.png')",
        'hero-pattern-dark': "url('./background-images//bg-dark-1.png')",
        'hero-pattern-dark-2': "url('./background-images/bg-dark-2.png')",
        'hero-about': "url('./background-images/bg-red-1.jpg')",
        'hero-substrate': "url('./background-images/cover-substrate-wave-3.jpg')",
        'hero-signer': "url('./background-images/cover-parity-signer.jpg')",
        'hero-blogPage': "url('./background-images/parity-office-pink.jpg')",
        'hero-rustJobs': "url('./background-images/duotone-1.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
