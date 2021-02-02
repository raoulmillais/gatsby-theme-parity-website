import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/layouts/SEO';
import Img from 'gatsby-image';
import FullScreenYouTube from '../../components/FullScreenYouTube';
import Social from '../../components/Social';
import { LocalizedLink } from 'gatsby-theme-i18n';
import signerLogo from '../../images/signer/logo-parity-signer-light.svg';
import signerApple from '../../images/signer/button-app-store-light.svg';
import signerAppleDark from '../../images/signer/button-app-store.svg';
import signerAndroid from '../../images/signer/button-google-play-light.svg';
import signerAndroidDark from '../../images/signer/button-google-play.svg';
import gitterLogo from '../../images/signer/logo-gitter.svg';

interface ParitySignerProps {
  data: any;
}

export default function ParitySigner({ data }: ParitySignerProps) {
  const intl = useIntl();
  const githubSigner = 'https://github.com/paritytech/parity-signer';
  const gitterSigner = 'https://gitter.im/paritytech/parity-signer';

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'signer-page-seo' })} />
      <section className="bg-hero-signer bg-cover bg-center -mt-24 xl:-mt-32 md:-mb-12">
        <div className="md:h-screen">
          <div className="container h-full max-w-4xl pt-36 md:pt-0 pb-16 px-2 flex flex-col justify-center items-center md:items-start md:w-2/3">
            <img className="mx-auto md:mx-0 w-64 h-auto py-4" src={signerLogo} alt="Parity Signer Logo" />
            <h3 className="text-white text-center md:text-left md:text-5xl lg:text-6xl py-4 max-w-2xl">
              {intl.formatMessage({ id: 'signer-page-title' })}
            </h3>
            <div className="flex md:flex-row items-center pt-8">
              <a href="https://itunes.apple.com/us/app/parity-signer/id1218174838" target="_blank" rel="noreferrer">
                <img className="w-auto h-12 mx-1 opacity-80" src={signerApple} alt="Parity Signer Apple iTunes" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=io.parity.signer" target="_blank" rel="noreferrer">
                <img
                  className="w-auto h-12 mx-1 opacity-80 md:pl-8"
                  src={signerAndroid}
                  alt="Parity Signer Apple iTunes"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityPink md:-mt-24">
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
                {intl.formatMessage({ id: 'signer-page-github-text' })}{' '}
                <a href={githubSigner} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'signer-page-github-link-text' })}
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row py-4 md:border-l md:pl-12">
              <a href={gitterSigner} target="_blank" rel="noreferrer">
                <img className="w-auto h-12" src={gitterLogo} alt="gitter logo parity technologies" />
              </a>
              <p className="text-sm text-parityGray text-center md:text-left mx-8">
                {intl.formatMessage({ id: 'signer-page-gitter-text' })}{' '}
                <a href={gitterSigner} target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'signer-page-gitter-link-text' })}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-textDark border-b border-parityBorder">
        <div className="md:py-10">
          <div className="text-gray-200 text-center mx-6 py-16">
            <img className="h-12 w-auto mx-auto mb-10" src={signerLogo} alt="" />
            <h3 className="md:text-5xl max-w-screen-lg mx-auto">
              {intl.formatMessage({ id: 'signer-page-into-title' })}
            </h3>
            <p className="max-w-screen-md mx-auto md:text-lg py-4">
              {intl.formatMessage({ id: 'signer-page-into-description' })}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-textDark border-b border-parityBoder h-full">
        <div className="container">
          <div className="pt-20 flex flex-col-reverse md:flex-row mx-auto">
            <div className="w-full md:w-1/2 h-auto max-w-screen-sm mx-auto">
              <Img
                className="md:max-w-md mx-auto"
                fluid={data.signerPhoneOne.childImageSharp.fluid}
                alt="Parity Signer Phone Image"
              />
            </div>
            <div className="text-parityWhite mx-4 md:w-1/2 lg:pt-20">
              <h3 className="text-white max-w-md">{intl.formatMessage({ id: 'signer-page-section-one-title' })}</h3>
              <p className="md:text-lg max-w-md">{intl.formatMessage({ id: 'signer-page-section-one-description' })}</p>
              <hr className="border-1 border-parityPink w-12" />
              <ul>
                <li className="md:text-lg max-w-md font-light">
                  {intl.formatMessage({ id: 'signer-page-section-one-bullte-one' })}
                </li>
                <li className="md:text-lg max-w-md font-light">
                  {intl.formatMessage({ id: 'signer-page-section-one-bullte-two' })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite h-full">
        <div className="container">
          <div className="pt-20 flex flex-col md:flex-row-reverse mx-auto">
            <div className="w-full md:w-1/2 h-auto max-w-screen-sm mx-auto">
              <Img
                className="md:max-w-md mx-auto"
                fluid={data.signerPhoneTwo.childImageSharp.fluid}
                alt="Parity Signer Phone Image"
              />
            </div>
            <div className="text-textDark mx-4 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div>
                <h3 className="max-w-lg">{intl.formatMessage({ id: 'signer-page-section-two-title' })}</h3>
                <p className="md:text-lg max-w-lg">
                  {intl.formatMessage({ id: 'signer-page-section-two-description' })}
                </p>
                <hr className="border-1 border-parityPink w-12" />
                <ul>
                  <li className="md:text-lg max-w-lg font-light">
                    {intl.formatMessage({ id: 'signer-page-section-two-bullte-one' })}
                  </li>
                  <li className="md:text-lg max-w-md font-light">
                    {intl.formatMessage({ id: 'signer-page-section-two-bullte-two' })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite border-b border-parityBoder h-full">
        <div className="container">
          <div className="py-20 flex flex-col md:flex-row mx-auto">
            <div className="w-full md:w-1/2 h-auto max-w-screen-sm mx-auto">
              <Img
                className="md:max-w-md mx-auto"
                fluid={data.signerPhoneThree.childImageSharp.fluid}
                alt="Parity Signer Phone Image"
              />
            </div>
            <div className="text-textDark mx-4 md:w-1/2 md:flex md:flex-col md:justify-center">
              <div>
                <h3 className="max-w-lg">{intl.formatMessage({ id: 'signer-page-section-three-title' })}</h3>
                <p className="md:text-lg max-w-lg">
                  {intl.formatMessage({ id: 'signer-page-section-three-description' })}
                </p>
                <hr className="border-1 border-parityPink w-12" />
                <ul>
                  <li className="md:text-lg max-w-lg font-light">
                    {intl.formatMessage({ id: 'signer-page-section-three-bullte-one' })}
                  </li>
                  <li className="md:text-lg max-w-md font-light">
                    {intl.formatMessage({ id: 'signer-page-section-three-bullte-two' })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-textDark">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center py-12">
          <div className="lg:w-1/2 max-w-md">
            <FullScreenYouTube
              image={data.videoThumbnail.childImageSharp.fluid.src}
              link="none"
              videoId="57fl_hmOuZg"
            />
          </div>
          <div className="text-gray-300 mx-4 -mt-6 lg:w-1/2 max-w-lg">
            <h4 className="md:text-3xl">{intl.formatMessage({ id: 'signer-page-video-section-title' })}</h4>
            <p className="md:text-lg">{intl.formatMessage({ id: 'signer-page-video-section-description' })}</p>
          </div>
        </div>
      </section>
      <section className="bg-hero-pattern-dark bg-cover bg-center h-full">
        <div className="container">
          <div className="flex flex-col items-center pt-24 pb-16 text-center">
            <h4 className="md:text-3xl">{intl.formatMessage({ id: 'signer-page-dowbload-section-title' })}</h4>
            <div className="flex flex-col sm:flex-row items-center pt-8">
              <a href="https://itunes.apple.com/us/app/parity-signer/id1218174838" target="_blank" rel="noreferrer">
                <img
                  className="w-auto h-16 mx-1 opacity-80 hover:opacity-100"
                  src={signerAppleDark}
                  alt="Parity Signer Apple iTunes"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=io.parity.signer" target="_blank" rel="noreferrer">
                <img
                  className="w-auto h-16 mx-1 opacity-80 hover:opacity-100 md:pl-8"
                  src={signerAndroidDark}
                  alt="Parity Signer Apple iTunes"
                />
              </a>
            </div>
            <p className="text-xs py-4">
              {intl.formatMessage({ id: 'signer-page-dowbload-section-small-text-one' })}{' '}
              <LocalizedLink
                className="text-parityPink no-underline hover:underline"
                to="https://www.parity.io/signer-eula"
              >
                {intl.formatMessage({ id: 'signer-page-dowbload-section-small-text-two' })}
              </LocalizedLink>
            </p>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        gitter
        github
      }
    }
    signerPhoneOne: file(relativePath: { eq: "signer/parity-signer-phone-1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signerPhoneTwo: file(relativePath: { eq: "signer/parity-signer-phone-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    signerPhoneThree: file(relativePath: { eq: "signer/parity-signer-phone-3.jpg" }) {
      childImageSharp {
        fluid(quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    videoThumbnail: file(relativePath: { eq: "signer/video-thumbnail-9.jpg" }) {
      childImageSharp {
        fluid(quality: 90, toFormat: PNG) {
          src
        }
      }
    }
  }
`;
