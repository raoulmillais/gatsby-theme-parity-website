import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Button from '../../Button';
import TechCard from '../../TechCard';
import { useIntl } from 'react-intl';

export default function HeroPattern() {
  const intl = useIntl();
  const images = useStaticQuery(graphql`
    {
      substrate: file(relativePath: { eq: "substrate-logo-dark.svg" }) {
        id
        publicURL
      }
      polkadot: file(relativePath: { eq: "icon-polkadot-light.svg" }) {
        id
        publicURL
      }
      signer: file(relativePath: { eq: "icon-parity-signer-light.png" }) {
        id
        publicURL
      }
      github: file(relativePath: { eq: "github-red.png" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-2 bg-cover bg-center -mt-32 md:mt-0">
      <div className="h-full">
        <div className="container h-full text-center pt-40 md:pt-24 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
          <h3 className="md:text-4xl xl:px-72">{intl.formatMessage({ id: 'technology-page-title' })}</h3>
          <p className="leading-9 mb-8 text-textDark md:text-2xl md:px-12">
            {intl.formatMessage({ id: 'technology-page-sub-title-1' })}
          </p>
          <div className="md:flex md:flex-col">
            <div className="md:flex md:justify-center">
              <TechCard
                title={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-title' })}
                description={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-description' })}
                logo={images.polkadot.publicURL}
                link="/polkadot"
                extraClass=" "
                theme="dark"
              />
              <TechCard
                title={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-title' })}
                description={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-description' })}
                logo={images.substrate.publicURL}
                link="/substrate"
                extraClass="pt-10"
                theme="dark"
              />
            </div>
            <div className="md:flex md:justify-center">
              <TechCard
                title={intl.formatMessage({ id: 'homepage-parity-tech-section-signer-title' })}
                description={intl.formatMessage({ id: 'homepage-parity-tech-section-signer-description' })}
                logo={images.signer.publicURL}
                link="/signer"
                extraClass=" "
                theme="dark"
              />
              <TechCard
                title={intl.formatMessage({ id: 'technology-page-github-title' })}
                description={intl.formatMessage({ id: 'technology-page-github-text' })}
                logo={images.github.publicURL}
                link="https://github.com/paritytech/"
                extraClass="bg-gray-200 rounded-full opacity-60"
                theme="red"
              />
            </div>
          </div>
          <h4 className="leading-9 mt-20 mb-8 text-textDark md:text-3xl md:px-12">
            {intl.formatMessage({ id: 'technology-page-sub-title-2' })}
          </h4>
          <Button extraClass=" " link="/solutions">
            {intl.formatMessage({ id: 'technology-page-cta' })}
          </Button>
          <p className="leading-9 mb-8 text-textDark text-xs">
            {intl.formatMessage({ id: 'technology-page-sub-cta-1' })}&nbsp;
            <LocalizedLink className="text-parityPink no-underline hover:underline" to="/contact">
              {intl.formatMessage({ id: 'technology-page-sub-cta-2' })}
            </LocalizedLink>
            &nbsp;{intl.formatMessage({ id: 'technology-page-sub-cta-3' })}
          </p>
        </div>
      </div>
    </section>
  );
}
