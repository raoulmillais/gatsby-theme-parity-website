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
        <div className="container py-28 max-w-2xl">
          <div className="text-center">
            <blockquote className="mb-8 leading-8 text-textDark">
              {`"${intl.formatMessage({ id: 'about-page-jutta-quote' })}"`}
            </blockquote>
            <h4 className="font-semibold mb-2">{intl.formatMessage({ id: 'homepage-team-jutta' })}</h4>
            <span className="text-sm">{intl.formatMessage({ id: 'about-page-jutta-title' })}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
