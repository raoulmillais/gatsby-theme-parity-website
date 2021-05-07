import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CardNoLink from '../../CardNoLink';
import { useIntl } from 'react-intl';

export default function ParityTech() {
  const intl = useIntl();

  const images = useStaticQuery(graphql`
    {
      people: file(relativePath: { eq: "icon-people.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 44, quality: 90) {
            src
          }
        }
      }
      graph: file(relativePath: { eq: "icon-graph.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 44, quality: 90) {
            src
          }
        }
      }
      codeWindow: file(relativePath: { eq: "icon-code-window.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 44, quality: 90) {
            src
          }
        }
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityWhite">
      <div className="container py-16 md:pt-16 md:pb-24 flex flex-col items-center text-center ">
        <div className="px-8 max-w-3xl md:py-8">
          <h3 className="font-normal md:text-5xl md:leading-tight">
            {intl.formatMessage({ id: 'solutions-page-expert-title' })}
          </h3>
          <p className="text-base md:text-lg text-textDark leading-7 md:py-8">
            {intl.formatMessage({ id: 'solutions-page-expert-description' })}
          </p>
        </div>
        <div className="md:flex">
          <CardNoLink
            title={intl.formatMessage({ id: 'solutions-page-expert-card-one-title' })}
            description={intl.formatMessage({ id: 'solutions-page-expert-card-one-description' })}
            logo={images.people.childImageSharp.fluid.src}
          />
          <CardNoLink
            title={intl.formatMessage({ id: 'solutions-page-expert-card-two-title' })}
            description={intl.formatMessage({ id: 'solutions-page-expert-card-two-description' })}
            logo={images.graph.childImageSharp.fluid.src}
          />
          <CardNoLink
            title={intl.formatMessage({ id: 'solutions-page-expert-card-three-title' })}
            description={intl.formatMessage({ id: 'solutions-page-expert-card-three-description' })}
            logo={images.codeWindow.childImageSharp.fluid.src}
          />
        </div>
      </div>
    </section>
  );
}
