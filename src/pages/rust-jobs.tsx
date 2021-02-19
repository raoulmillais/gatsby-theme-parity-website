import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import FeaturedBlogs from '../components/FeaturedBlogs';
import Social from '../components/Social';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Button from '../components/Button';
import parityRustImage from '../images/parity-heart-rust.svg';

export default function RustJobsPage() {
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
      <SEO title={intl.formatMessage({ id: 'rust-jobs-page-seo' })} />
      <section className="bg-hero-rustJobs bg-cover bg-center bg-fixed -mt-24 xl:-mt-36 md:-mb-32">
        <div className="md:h-screen">
          <div className="container h-full text-center max-w-4xl pt-64 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img className="mx-auto w-96 h-auto py-4" src={parityRustImage} alt="Parity Loves Rust Image" />
            <h3 className="text-white">{intl.formatMessage({ id: 'rust-jobs-page-title-one' })}</h3>
            <h3 className="text-white -mt-2">{intl.formatMessage({ id: 'rust-jobs-page-title-two' })}</h3>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div className="flex justify-center mx-4 md:mx-auto py-12 max-w-screen-lg">
            <div className="max-w-screen-md">
              <h2 className="text-center py-4 md:text-5xl">
                {intl.formatMessage({ id: 'rust-jobs-page-intro-title' })}
              </h2>
              <p className="md:text-lg md:py-2">{intl.formatMessage({ id: 'rust-jobs-page-intro-paragraph-one' })}</p>
              <p className="md:text-lg md:py-2">{intl.formatMessage({ id: 'rust-jobs-page-intro-paragraph-two' })}</p>
              <p className="md:text-lg md:py-2">{intl.formatMessage({ id: 'rust-jobs-page-intro-paragraph-three' })}</p>
              <h3>{intl.formatMessage({ id: 'rust-jobs-page-intro-requirements' })}</h3>
              <ul>
                <li className="font-light">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-requirements-bullet-one' })}
                </li>
                <li className="font-light">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-requirements-bullet-two' })}
                </li>
              </ul>
              <h3>{intl.formatMessage({ id: 'rust-jobs-page-intro-benefits' })}</h3>
              <ul>
                <li className="font-light">{intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-one' })}</li>
                <li className="font-light">{intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-two' })}</li>
                <li className="font-light">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-three' })}
                </li>
                <li className="font-light">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-four' })}
                </li>
                <li className="font-light">
                  {intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-bullet-five' })}
                </li>
              </ul>
              <p
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'rust-jobs-page-intro-benefits-privacy-policy' }),
                }}
              />
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
      <section>
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
                <LocalizedLink className="no-underline text-parityPink hover:underline text-sm font-normal" to="/jobs/">
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
      <section className="h-full border-t">
        <div className="container">
          <div className="flex flex-col items-center pt-12 pb-24 text-center">
            <h4 className="md:text-3xl pt-4 pb-4">{intl.formatMessage({ id: 'rust-jobs-page-footer-cta-title' })}</h4>
            <Button link="/jobs/" extraClass="">
              {intl.formatMessage({ id: 'rust-jobs-page-footer-cta' })}
            </Button>
          </div>
        </div>
      </section>
      <FeaturedBlogs />
      <Social />
    </Layout>
  );
}
