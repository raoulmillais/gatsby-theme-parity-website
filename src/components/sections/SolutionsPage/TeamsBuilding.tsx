import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';

export default function ParityTech() {
  const intl = useIntl();

  const images = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "teams" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 200, quality: 90) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
            relativePath
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <section className="h-full border-t">
      <div className="container text-center flex flex-col items-center justify-center">
        <h4 className="font-normal text-lg md:text-2xl py-10">
          {intl.formatMessage({ id: 'solutions-page-teams-building' })}
        </h4>
        <div className="flex flex-wrap justify-center opacity-50 pb-6 object-contain">
          {images.allFile.edges.map((edge: any, index: number) => {
            return (
              <div key={index} className="mx-8 mb-8 flex items-center justify-center">
                <Img
                  className="w-40 h-auto"
                  key={edge.node.id}
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
