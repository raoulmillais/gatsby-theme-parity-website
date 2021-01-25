import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';

export default function ParityTech() {
  const intl = useIntl();

  const images = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "company-logos" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
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
    <section className="bg-parityGray h-full border-t-2 pb-8 pt-6">
      <div className="container text-center flex flex-col items-center justify-center">
        <h5 className="text-textLight opacity-50 px-2 mb-3">
          {intl.formatMessage({ id: 'homepage-companies-using-our-tech-title' })}
        </h5>
        <div className="flex flex-wrap justify-center opacity-50 max-w-screen-md">
          {images.allFile.edges.map((edge: any) => (
            // eslint-disable-next-line react/jsx-key
            <Img
              className="w-24 mx-3 my-1 h-auto"
              key={edge.node.id}
              fluid={edge.node.childImageSharp.fluid}
              alt={edge.node.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
