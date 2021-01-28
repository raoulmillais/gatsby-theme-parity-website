import React from 'react';
import { useIntl } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';

export default function JuttaQuote() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "jutta-quote.jpg" }) {
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
    <section className="h-full bg-gray-200">
      <div className="2xl:container" style={bgStyles}>
        <div className="container py-28 max-w-3xl">
          <div className="text-center">
            <blockquote className="tracking-wider">
              {`"${intl.formatMessage({ id: 'about-page-jutta-quote' })}"`}
            </blockquote>
            <p className="text-lg mb-0 mt-8">{intl.formatMessage({ id: 'homepage-team-jutta' })}</p>
            <p className="text-sm mt-0 text-textLight">{intl.formatMessage({ id: 'about-page-jutta-title' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
