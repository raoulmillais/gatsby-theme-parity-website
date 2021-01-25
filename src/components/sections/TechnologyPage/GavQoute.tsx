import React from 'react';
import { useIntl } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function GavQoute() {
  const intl = useIntl();
  const backgroundImg = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gav-quote-1.jpg" }) {
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
    <section className="h-full bg-black">
      <div className="2xl:container" style={bgStyles}>
        <div className="container py-28 max-w-2xl">
          <div className="text-center text-white">
            <blockquote className="tracking-wider">
              {`"${intl.formatMessage({ id: 'technology-page-gavin-quote' })}"`}
            </blockquote>
            <p className="text-base mb-0 mt-8">{intl.formatMessage({ id: 'homepage-team-gavin' })}</p>
            <p className="text-sm mt-0">{intl.formatMessage({ id: 'technology-page-gavin-title' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
