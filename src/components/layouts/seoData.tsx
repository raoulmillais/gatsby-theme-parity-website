export const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  publisher: {
    '@type': 'Organization',
    name: 'Blockchain Infrastructure for the Decentralised Web',
    url: 'https://www.parity.io/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.parity.io/images/parity-logo-square.png',
      width: 60,
      height: 60,
    },
  },
  url: 'https://www.parity.io/',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.parity.io/images/card-image-parity.png',
    width: 1600,
    height: 800,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.parity.io/',
  },
  description:
    'Parity Technologies builds core blockchain infrastructure. From Parity Ethereum, the most advanced Ethereum client, to Polkadot, the next-generation interoperable blockchain network.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ignition Law, 1 Sans Walk',
    addressLocality: 'London',
    postalCode: 'EC1R 0LT',
    addressCountry: 'UK',
  },
  sameAs: [
    'https://twitter.com/ParityTech',
    'https://www.facebook.com/ParityTech/',
    'https://www.instagram.com/paritytech/',
    'https://www.crunchbase.com/organization/ethcore',
    'https://www.linkedin.com/company/paritytech/',
    'https://medium.com/paritytech',
    'https://github.com/paritytech',
    'https://beta.companieshouse.gov.uk/company/09760015',
  ],
};
