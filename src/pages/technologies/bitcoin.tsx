import React from 'react';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/layouts/SEO';
import Button from '../../components/Button';
import CardNoLink from '../../components/CardNoLink';
import FooterCTA from '../../components/FooterCTA';
import Social from '../../components/Social';
import parityBitcoinLogo from '../../images/logo-parity-bitcoin.svg';
import gitterLogo from '../../images/signer/logo-gitter.svg';
import introImageOne from '../../images/image-5.jpg';
import introImageTwo from '../../images/image-3.jpg';
import imageOne from '../../images/blog-parity-bitcoin.png';

export default function BitcoinPage() {
  const intl = useIntl();
  const githubSigner = 'https://github.com/paritytech/parity-bitcoin';
  const gitterSigner = 'https://gitter.im/paritytech/parity-bitcoin';

  return (
    <Layout>
      <SEO title="Parity Bitcoin Client" />
      <section className="md:bg-hero-pattern bg-cover bg-center bg-fixed -mt-32 xl:-mt-36 md:-mb-32">
        <div className="md:h-screen">
          <div className="container h-full text-center max-w-4xl pt-64 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img className="mx-auto w-64 h-auto py-4" src={parityBitcoinLogo} alt="Parity Bitcoin Client Logo" />
            <h3 className="md:text-3xl lg:text-5xl py-4">{intl.formatMessage({ id: 'bitcoin-page-title' })}</h3>
            <Button link="/technologies/bitcoin/#download">
              {intl.formatMessage({ id: 'bitcoin-page-hero-cta' })}
            </Button>
            <p className="text-sm">
              {intl.formatMessage({ id: 'bitcoin-page-hero-sub-cta-one' })}{' '}
              <a href="/technologies/bitcoin/#intro" className="text-parityPink no-underline hover:underline">
                {intl.formatMessage({ id: 'bitcoin-page-hero-sub-cta-two' })}
              </a>{' '}
              {intl.formatMessage({ id: 'bitcoin-page-hero-sub-cta-three' })}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-textDark md:-mt-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:max-w-screen-md md:mx-auto py-4 md:py-7">
            <div className="flex flex-col items-center md:flex-row py-4">
              <a href={githubSigner} target="_blank" rel="noreferrer">
                <svg
                  className="w-auto h-12"
                  fill="white"
                  role="img"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="5 5 24 24"
                >
                  <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                </svg>
              </a>
              <p className="text-sm text-parityGray text-center md:text-left mx-8">
                {intl.formatMessage({ id: 'bitcoin-page-github-description' })}{' '}
                <a href={githubSigner} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'bitcoin-page-github-cta' })}
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row py-4 md:border-l md:pl-12">
              <a href={gitterSigner} target="_blank" rel="noreferrer">
                <img className="w-auto h-12" src={gitterLogo} alt="gitter logo parity technologies" />
              </a>
              <p className="text-sm text-parityGray text-center md:text-left mx-8">
                {intl.formatMessage({ id: 'bitcoin-page-gitter-description' })}{' '}
                <a href={gitterSigner} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'bitcoin-page-gitter-cta' })}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="intro" className="bg-parityGray h-full">
        <div className="container flex  flex-col px-4 ">
          <div className="mt-12 md:flex md:justify-center">
            <div className="hidden md:inline-block md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto " src={introImageOne} alt="parity intro image" />
            </div>
            <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="text-2xl md:text-3xl">
                {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-title' })}
              </h3>
              <p className="text-lg">{intl.formatMessage({ id: 'bitcoin-page-intro-section-one-description' })}</p>
              <hr className="border-1 border-parityPink w-12" />
              <ul>
                <li className="text-base md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-one' })}
                </li>
                <li className="text-base md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-two' })}
                </li>
                <li className="text-base  md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-three' })}
                </li>
                <li className="text-base  md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-four' })}
                </li>
                <li className="text-base  md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-one-bullet-five' })}
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:flex md:justify-center md:flex-row-reverse">
            <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
              <img className="w-auto h-auto mx-auto my-12" src={introImageTwo} alt="parity intro image" />
            </div>
            <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
              <h3 className="text-2xl md:text-3xl">
                {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-title' })}
              </h3>
              <p className="text-lg">{intl.formatMessage({ id: 'bitcoin-page-intro-section-two-description' })}</p>
              <hr className="border-1 border-parityPink w-12" />
              <ul>
                <li className="text-base md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-bullet-one' })}
                </li>
                <li className="text-base md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-bullet-two' })}
                </li>
                <li className="text-base  md:text-xl font-light">
                  {intl.formatMessage({ id: 'bitcoin-page-intro-section-two-bullet-three' })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="2xl:container md:flex ">
          <div className="h-64 md:h-96 md:w-1/2">
            <img
              className="h-full w-full object-cover"
              src={imageOne}
              alt="World Food Programme build on Parity Technologie"
            />
          </div>
          <div className="text-textDark px-6 pb-12 md:w-1/2 lg:flex lg:justify-center">
            <div className="lg:w-2/3">
              <h6 className="text-xs uppercase tracking-wide">
                {intl.formatMessage({ id: 'bitcoin-page-from-the-blog' })}
              </h6>
              <h4 className="md:text-3xl">{intl.formatMessage({ id: 'bitcoin-page-blog-section-title' })}</h4>
              <p>{intl.formatMessage({ id: 'bitcoin-page-blog-section-description' })}</p>
              <span className="text-xs text-parityPink font-bold">
                <LocalizedLink
                  className="no-underline"
                  to="/blog/parity-bitcoin-is-now-supporting-segwit-segwit2x-and-bitcoin-cash/"
                >
                  {intl.formatMessage({ id: 'bitcoin-page-blog-section-read-more' })}
                </LocalizedLink>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
        <div className="container py-16 md:pt-16 md:pb-24 flex flex-col items-center text-center ">
          <div className="px-4 max-w-3xl md:py-8">
            <h3 className="md:text-4xl">{intl.formatMessage({ id: 'bitcoin-page-why-parity-bitcoin' })}</h3>
          </div>
          <div className="md:flex">
            <CardNoLink
              title={intl.formatMessage({ id: 'bitcoin-page-block-one-title' })}
              description={intl.formatMessage({ id: 'bitcoin-page-block-one-description' })}
            />
            <CardNoLink
              title={intl.formatMessage({ id: 'bitcoin-page-block-two-title' })}
              description={intl.formatMessage({ id: 'bitcoin-page-block-two-description' })}
            />
            <CardNoLink
              title={intl.formatMessage({ id: 'bitcoin-page-block-three-title' })}
              description={intl.formatMessage({ id: 'bitcoin-page-block-three-description' })}
            />
          </div>
        </div>
      </section>
      <section id="download" className="bg-textDark h-full pb-24">
        <div className="flex flex-col justify-center">
          <div className="px-4 py-16 text-center text-gray-200">
            <h3 className="md:text-4xl">{intl.formatMessage({ id: 'bitcoin-page-download-section-title' })}</h3>
          </div>
          <div className="mx-auto flex flex-col md:flex-row md:items-center">
            <div className="mx-4 md:mx-0 my-2 border-2 border-parityBorder h-52 md:h-56 flex flex-col justify-between rounded-md max-w-sm">
              <div className="text-gray-200 text-center pt-2 px-10">
                <p className="md:text-lg">{intl.formatMessage({ id: 'bitcoin-page-download-block-one-title' })}</p>
                <p className="text-sm">{intl.formatMessage({ id: 'bitcoin-page-download-block-one-description' })}</p>
              </div>
              <a className="no-underline" href={githubSigner} target="_blank" rel="noreferrer">
                <div className="relative hover:opacity-90">
                  <div className="absolute top-2 left-2 opacity-90">
                    <svg
                      className="w-8 h-auto"
                      fill="white"
                      role="img"
                      xmlns="http://www.w3.org/1999/xlink"
                      viewBox="5 5 24 24"
                    >
                      <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                    </svg>
                  </div>
                  <div className="bg-parityPink text-center capitalize text-gray-200 py-3 rounded-b-md">
                    {intl.formatMessage({ id: 'bitcoin-page-download-block-one-cta' })}
                  </div>
                </div>
              </a>
            </div>
            <div className="mx-4 md:-mx-2 z-10 my-2 border-2 bg-textDark border-parityBorder h-52 md:h-60 flex flex-col justify-between rounded-md max-w-sm">
              <div className="relative text-gray-200 text-center pt-2 px-12">
                <span className="absolute top-3 right-3 bg-parityPink text-xxs font-bold uppercase rounded-xl py-1 px-3 ml-2">
                  {intl.formatMessage({ id: 'bitcoin-page-download-block-two-popular' })}
                </span>
                <p className="md:text-lg">{intl.formatMessage({ id: 'bitcoin-page-download-block-two-title' })}</p>
                <p className="text-sm">{intl.formatMessage({ id: 'bitcoin-page-download-block-two-description' })}</p>
              </div>
              <a className="no-underline" href={githubSigner} target="_blank" rel="noreferrer">
                <div className="relative hover:opacity-90">
                  <div className="absolute top-2 left-2 opacity-90">
                    <svg
                      className="w-8 h-auto"
                      fill="white"
                      role="img"
                      xmlns="http://www.w3.org/1999/xlink"
                      viewBox="5 5 24 24"
                    >
                      <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
                    </svg>
                  </div>
                  <div className="bg-parityPink text-center capitalize text-gray-200 py-3 rounded-b-md">
                    {intl.formatMessage({ id: 'bitcoin-page-download-block-two-cta' })}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityGray py-12">
        <FooterCTA
          title={intl.formatMessage({ id: 'bitcoin-page-footer-cta-title' })}
          buttonText={intl.formatMessage({ id: 'bitcoin-page-footer-cta' })}
          buttonLink="/technologies/solutions"
          subCTATextOne={intl.formatMessage({ id: 'bitcoin-page-footer-sub-cta-one' })}
          subCTATextTwo={intl.formatMessage({ id: 'bitcoin-page-footer-sub-cta-two' })}
          subCTATextLink="/technologies/"
        />
      </section>
      <Social />
    </Layout>
  );
}
