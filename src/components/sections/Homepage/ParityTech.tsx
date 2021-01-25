import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../../Button';
import TechCard from '../../TechCard';
import { useIntl } from 'react-intl';

export default function ParityTech() {
  const intl = useIntl();

  const images = useStaticQuery(graphql`
    {
      substrate: file(relativePath: { eq: "substrate-logo-light.svg" }) {
        id
        publicURL
      }
      polkadot: file(relativePath: { eq: "icon-polkadot.svg" }) {
        id
        publicURL
      }
      signer: file(relativePath: { eq: "icon-parity-signer.png" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
      <div className="container flex flex-col items-center text-center ">
        <h4 className="px-8 mt-24 mb-16 font-light md:text-3xl md:w-3/4 lg:w-2/3 xl:w-1/2">
          {intl.formatMessage({ id: 'homepage-parity-tech-section-title' })}
        </h4>
        <div className="md:flex">
          <TechCard
            title={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-title' })}
            description={intl.formatMessage({ id: 'homepage-parity-tech-section-substrate-description' })}
            logo={images.substrate.publicURL}
            link="/substrate"
            extraClass="pt-10"
            theme="light"
          />
          <TechCard
            title={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-title' })}
            description={intl.formatMessage({ id: 'homepage-parity-tech-section-polkadot-description' })}
            logo={images.polkadot.publicURL}
            link="/polkadot"
            extraClass=" "
            theme="light"
          />
          <TechCard
            title={intl.formatMessage({ id: 'homepage-parity-tech-section-signer-title' })}
            description={intl.formatMessage({ id: 'homepage-parity-tech-section-signer-description' })}
            logo={images.signer.publicURL}
            link="/signer"
            extraClass=" "
            theme="light"
          />
        </div>
        <div className="mb-24 mt-12">
          <Button extraClass="" link="/technologies">
            {intl.formatMessage({ id: 'homepage-parity-tech-section-cta' })}
          </Button>
        </div>
      </div>
    </section>
  );
}
