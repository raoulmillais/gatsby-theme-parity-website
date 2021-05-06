module.exports = {
  siteMetadata: {
    title: 'Parity Technologies',
    siteUrl: 'https://www.parity.io',
    description: 'Parity Description',
    author: 'Parity WebDev Team',
    pressEmail: 'press@parity.io',
    email: 'info@parity.io',
    twitter: 'https://twitter.com/ParityTech',
    linkedIn: 'https://www.linkedin.com/company/paritytech',
    element: 'https://app.element.io/#/room/#watercooler:matrix.parity.io',
    github: 'https://github.com/paritytech/',
    telegram: 'https://t.me/parity_technologies',
    gitter: 'https://gitter.im/paritytech/parity',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-klaro',
      options: {
        includeInDevelopment: true,
        klaroVersion: 'v0.7.11',
        config: {
          storageMethod: 'localStorage',
          cookieName: 'parityCookie',
          cookieExpiresAfterDays: 120,
          disablePoweredBy: true,
          translations: {
            en: {
              consentModal: {
                title: 'Information that we collect',
                description: `We use necessary cookies to make our site work. We'd also like to set optional tracking mechanisms to help us improve it by collecting and reporting information on how you use it. Here you can customise the information we collect about you by giving or revoking your consent to our use of optional tracking mechanisms.`,
              },
              consentNotice: {
                description: `We use necessary cookies to make our site work. We'd also like to set optional tracking mechanisms to help us improve it by collecting and reporting information on how you use it.`,
                learnMore: 'Learn more',
              },
              googleAnalytics: {
                description: 'Collection of information about how visitors use our website',
              },
              decline: 'Deactivate all',
              ok: 'Accept',
              acceptAll: 'Accept all',
              acceptSelected: 'Accept selected',
            },
          },
          privacyPolicy: '/privacy/',
          default: false,
          mustConsent: false,
          services: [
            {
              name: 'googleAnalytics',
              default: true,
              title: 'Google Analytics',
              purposes: ['analytics'],
              cookies: [],
              onAccept: `
              function createCookie(name, value, days) {
                var expires
                if (days) {
                  var date = new Date()
                  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
                  expires = '; expires=' + date.toGMTString()
                } else {
                  expires = ''
                }
                document.cookie = name + '=' + value + expires + '; path=/'
              }
              createCookie('parityCookie', 'true', 120);
              window['ga-disable-UA-145158313-1'] = false;
              `,
              onDecline: `
              function eraseCookie(name) {   
                document.cookie = name+'=; Max-Age=-99999999;';  
              }
              eraseCookie('parityCookie');
              eraseCookie('_ga');
              eraseCookie('_gid');
              eraseCookie('_ga_145158313-1');
              window['ga-disable-UA-145158313-1'] = true;
              `,
              required: false,
              optOut: false,
              onlyOnce: false,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-145158313-1',
          cookieName: 'parityCookie',
          anonymize: true,
          allowAdFeatures: false,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        eventsGlobal: 'sa',
        events: true,
        trackPageViews: true,
        domain: 'api-sa.parity.io/latest.js',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: `en`,
        configPath: `${__dirname}/content/config.json`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./content/react-intl/en.json`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/favicon.png',
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layouts/Layout.tsx`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-twitter',
  ],
};
