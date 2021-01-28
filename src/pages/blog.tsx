import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import TransparentButton from '../components/TransparentButton';
import Layout from '../components/layouts/Layout';

export default function BlogPage() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "parity-office-pink.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
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
      <section className="bg-fixed -mt-32 md:pb-48" style={bgStyles}>
        <div className="text-white">
          <div className="container text-center pt-40 md:pt-52 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'blog-page-title' })}</h3>
            <p className="leading-9 px-4 mb-8 md:text-2xl md:px-12">
              {intl.formatMessage({ id: 'blog-page-description' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
