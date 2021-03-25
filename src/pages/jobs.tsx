import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import FooterCTA from '../components/FooterCTA';
import Social from '../components/Social';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import TransparentButton from '../components/TransparentButton';
import JobBoard from '../components/JobBoard';

export default function JobsPage() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "parity-office.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 2048, quality: 90) {
            src
          }
        }
      }
    }
  `);
  const bgStyles = {
    backgroundImage: `url(${backgroundImg.file.childImageSharp.fluid.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'jobs-page-seo' })} />
      <section className="bg-hero-rustJobs bg-cover bg-center bg-fixed -mt-32 md:-mb-64">
        <div className="md:h-screen text-white">
          <div className="container text-center pt-40 md:pt-52 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'jobs-page-hero-title' })}</h3>
            <p className="leading-9 px-4 mb-8 mx-auto md:text-2xl md:px-12 max-w-3xl">
              {intl.formatMessage({ id: 'jobs-page-hero-sub-title' })}
            </p>
            <TransparentButton extraClass=" " link="/jobs/#jobboard">
              {intl.formatMessage({ id: 'jobs-page-hero-cta' })}
            </TransparentButton>
            <p className="text-xs">
              {intl.formatMessage({ id: 'about-page-hero-sub-cta-1' })}&nbsp;
              <LocalizedLink className="font-bold" to="/contact/">
                {intl.formatMessage({ id: 'about-page-hero-sub-cta-2' })}
              </LocalizedLink>
              &nbsp;{intl.formatMessage({ id: 'about-page-hero-sub-cta-3' })}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div className="px-4 py-20 md:flex md:justify-between">
            <div className="md:w-2/3 md:max-w-xl">
              <h3 className="text-2xl md:text-4xl">{intl.formatMessage({ id: 'rust-jobs-page-developers-title' })}</h3>
              <p className="md:text-lg">{intl.formatMessage({ id: 'rust-jobs-page-developers-description' })}</p>
              <hr className="border-1 border-parityPink w-12" />
              <h5 className="mb-0">{intl.formatMessage({ id: 'rust-jobs-page-developers-one-title' })}</h5>
              <p className="text-sm tracking-wide text-textDark">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-one-description' })}
              </p>
              <h5 className="mb-0">{intl.formatMessage({ id: 'rust-jobs-page-developers-two-title' })}</h5>
              <p className="text-sm tracking-wide text-textDark">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-two-description' })}
              </p>
              <h5 className="mb-0">{intl.formatMessage({ id: 'rust-jobs-page-developers-three-title' })}</h5>
              <p className="text-sm tracking-wide text-textDark">
                {intl.formatMessage({ id: 'rust-jobs-page-developers-three-description' })}
              </p>
              <p className="py-4">
                <LocalizedLink
                  className="no-underline text-parityPink hover:underline text-sm font-normal"
                  to="/jobs/#jobboard"
                >
                  {intl.formatMessage({ id: 'rust-jobs-page-developers-cta' })}
                </LocalizedLink>
              </p>
            </div>
            <div className="md:w-1/3">
              <ul className="list-none text-sm pt-6 md:pt-0 pb-6">
                <li className="font-base pb-1">
                  <strong>{intl.formatMessage({ id: 'about-page-team-stats-office' })}</strong>
                </li>
                <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-office-berlin' })}</li>
                <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-office-london' })}</li>
                <li className="font-light pb-1">
                  {intl.formatMessage({ id: 'about-page-team-stats-office-cambridge' })}
                </li>
              </ul>
              <ul className="list-none text-sm">
                <li className="font-base pb-1">
                  <strong>{intl.formatMessage({ id: 'about-page-team-stats-facts' })}</strong>
                </li>
                <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-facts-one' })}</li>
                <li className="font-light pb-1">{intl.formatMessage({ id: 'about-page-team-stats-facts-two' })}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full bg-black">
        <div style={bgStyles}>
          <div className="container py-28 max-w-2xl">
            <div className="text-center text-white">
              <blockquote className="tracking-wider">
                {`"${intl.formatMessage({ id: 'rust-jobs-page-fred-quote' })}"`}
              </blockquote>
              <p className="text-base mb-0 mt-8">{intl.formatMessage({ id: 'rust-jobs-page-fred' })}</p>
              <p className="text-sm mt-0">{intl.formatMessage({ id: 'rust-jobs-page-fred-title' })}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="jobboard" className="bg-parityGray pb-8">
        <div className="container">
          <div className="text-center py-16">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'jobs-page-board-title' })}</h3>
          </div>
          <p className="text-gray-400 mx-4">* We are based in Berlin but remote work is possible</p>
          <JobBoard />
        </div>
      </section>
      <FooterCTA
        title={intl.formatMessage({ id: 'jobs-page-footer-cta-title' })}
        buttonText={intl.formatMessage({ id: 'jobs-page-footer-cta-button-text' })}
        buttonLink="/blog"
        subCTATextOne={intl.formatMessage({ id: 'jobs-page-footer-cta-text-one' })}
        subCTATextTwo={intl.formatMessage({ id: 'jobs-page-footer-cta-text-two' })}
        subCTATextLink="/contact"
      />
      <Social />
    </Layout>
  );
}
