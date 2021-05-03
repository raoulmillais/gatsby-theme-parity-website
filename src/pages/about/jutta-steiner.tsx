import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Img from 'gatsby-image';
import Button from '../../components/Button';
import FullScreenYouTube from '../../components/FullScreenYouTube';
import Social from '../../components/Social';
import SEO from '../../components/layouts/SEO';

interface JuttaSteinerProps {
  data: any;
}

export default function JuttaSteiner(props: JuttaSteinerProps) {
  const intl = useIntl();
  const { data } = props;

  return (
    <Layout theme="">
      <SEO title={intl.formatMessage({ id: 'jutta-page-title' })} />
      <section>
        <div className="container">
          <h3 className="font-medium text-center max-w-3xl leading-9 py-20 px-8 mx-auto text-3xl md:text-5xl md:leading-tight">
            {intl.formatMessage({ id: 'jutta-page-title' })}
          </h3>
          <div className="mx-auto sm:flex sm:justify-center lg:max-w-5xl">
            <div className="px-4 sm:w-1/3 sm:flex sm:flex-col sm:justify-center ">
              <Img
                className="rounded"
                fluid={data.juttaPortrait.childImageSharp.fluid}
                alt={intl.formatMessage({ id: 'jutta-steiner' })}
              />
              <caption className="text-xs flex italic text-textLight py-4">
                {intl.formatMessage({ id: 'jutta-steiner' })}
              </caption>
            </div>
            <div className="text-textDark px-4 text-lg lg:text-xl sm:w-2/3 md:w-1/2">
              <p className="font-normal">
                {intl.formatMessage({ id: 'jutta-page-description-one-1' })}&nbsp;
                <a
                  href="https://techcrunch.com/2018/06/15/here-are-the-finalists-for-the-europas-awards-2018-july-3-london/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {intl.formatMessage({ id: 'jutta-page-description-one-2' })}
                </a>
                &nbsp;{intl.formatMessage({ id: 'jutta-page-description-one-3' })}&nbsp;
                <a href="http://fortune.com/the-ledger-40-under-40/jutta-steiner-31/" target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'jutta-page-description-one-4' })}
                </a>
                &nbsp;{intl.formatMessage({ id: 'jutta-page-description-one-5' })}
              </p>
              <p className="font-normal">{intl.formatMessage({ id: 'jutta-page-description-two' })}</p>
              <p className="font-normal">{intl.formatMessage({ id: 'jutta-page-description-three' })}</p>
              <hr />
              <a href="https://twitter.com/jutta_steiner" target="_blank" rel="noreferrer">
                <svg
                  className="w-6 h-auto fill-current text-textLight hover:text-parityPink mx-4"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter icon</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-16 max-w-3xl">
          <div className="text-center">
            <blockquote className="font-light tracking-wide">
              {`"${intl.formatMessage({ id: 'about-page-jutta-quote' })}"`}
            </blockquote>
            <p className="text-textDark font-normal text-lg mb-0 mt-8">
              — {intl.formatMessage({ id: 'jutta-steiner' })}
            </p>
          </div>
          <div className="py-12 max-w-md mx-auto ">
            <FullScreenYouTube
              image={data.jutta.childImageSharp.fluid.src}
              videoId="Gsy2Sl1EtFs"
              link="/about/jutta-steiner/"
            />
            <p className="font-normal text-sm pt-0 -mt-5 ml-2">
              {intl.formatMessage({ id: 'jutta-page-video-caption' })}
            </p>
          </div>
        </div>
      </section>
      <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
        <div className="container py-16 flex flex-col items-center text-center ">
          <div className="px-4 max-w-3xl md:py-8">
            <h3 className="font-normal text-2xl md:text-4xl md:pb-6 ">
              {intl.formatMessage({ id: 'jutta-page-bottom-cta-title' })}
            </h3>
            <Button extraClass="mb-8 md:mb-4" link="/about">
              {intl.formatMessage({ id: 'jutta-page-bottom-cta' })}
            </Button>
            <p className="font-normal text-sm">
              {intl.formatMessage({ id: 'jutta-page-bottom-sub-cta-1' })}
              <LocalizedLink className="text-parityPink hover:underline" to="/blog/">
                {intl.formatMessage({ id: 'jutta-page-bottom-sub-cta-2' })}
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
    juttaVideo: file(relativePath: { eq: "jutta-steiner-1.jpg" }) {
      name
      childImageSharp {
        fluid(toFormat: PNG, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    juttaPortrait: file(relativePath: { eq: "jutta-steiner.jpg" }) {
      name
      childImageSharp {
        fluid(toFormat: PNG, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jutta: file(relativePath: { eq: "jutta-steiner-1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, toFormat: PNG) {
          src
        }
      }
    }
    site {
      siteMetadata {
        twitter
      }
    }
  }
`;
