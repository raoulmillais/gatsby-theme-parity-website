import React from 'react';
import Layout from '../../components/layouts/Layout';
import Button from '../../components/Button';
import { useIntl } from 'react-intl';
import polkadotLogo from '../../images/logo-polkadot.svg';
import Social from '../../components/Social';

export default function PolkadotPage() {
  const intl = useIntl();

  return (
    <Layout theme="">
      <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-24 xl:-mt-36 md:-mb-32">
        <div className="md:h-screen">
          <div className="container h-full text-center max-w-4xl pt-64 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img className="mx-auto w-44 h-auto py-4" src={polkadotLogo} alt="Polkadot Logo" />
            <h3 className="md:text-5xl lg:text-6xl py-4">{intl.formatMessage({ id: 'polkadot-page-hero-title' })}</h3>
            <Button extraClass=" " link="https://polkadot.network/">
              {intl.formatMessage({ id: 'polkadot-page-hero-cta' })}
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-textDark">
        <div className="container">
          <div className="text-gray-300 px-4 lg:px-28 py-24 lg:flex">
            <div className="lg:w-1/2">
              <h3 className="md:text-4xl lg:text-5xl">{intl.formatMessage({ id: 'polkadot-page-intro-title' })}</h3>
            </div>
            <div className="lg:w-1/2 lg:text-xl">
              <p>{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-one' })}</p>
              <p>{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-two' })}</p>
              <p>{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-three' })}</p>
              <p>{intl.formatMessage({ id: 'polkadot-page-intro-paragraph-four' })}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
        <div className="container pt-8 pb-16 md:pt-16 md:pb-20 flex flex-col items-center text-center ">
          <div className="px-4 max-w-3xl md:py-8">
            <h3 className="md:text-4xl md:pb-6 ">{intl.formatMessage({ id: 'polkadot-page-cta-title' })}</h3>
            <Button extraClass="" link="https://polkadot.network/">
              {intl.formatMessage({ id: 'polkadot-page-cta' })}
            </Button>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
