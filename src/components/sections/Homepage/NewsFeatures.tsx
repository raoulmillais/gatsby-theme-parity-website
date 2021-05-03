import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';

export default function NewsFeatures() {
  const intl = useIntl();
  const logoStyles = 'w-40 mx-3 my-1 h-auto';
  const images = useStaticQuery(graphql`
    {
      wsj: file(relativePath: { eq: "news-logos/logo-wsj.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      techCrunch: file(relativePath: { eq: "news-logos/logo-techcrunch.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      bloomberg: file(relativePath: { eq: "news-logos/logo-bloomberg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      forbes: file(relativePath: { eq: "news-logos/logo-forbes.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      coindesk: file(relativePath: { eq: "news-logos/logo-coindesk.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      cointelegraph: file(relativePath: { eq: "news-logos/logo-cointelegraph.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      economist: file(relativePath: { eq: "news-logos/logo-economist.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `);
  const { wsj, techCrunch, bloomberg, forbes, coindesk, cointelegraph, economist } = images;

  return (
    <section className="h-full border pb-8 pt-6">
      <div className="container text-center flex flex-col items-center justify-center">
        <h5 className="text-textLight md:text-xl opacity-50 px-2 mb-3">
          {intl.formatMessage({ id: 'homepage-news-title' })}
        </h5>
        <div className="flex flex-wrap justify-center opacity-50 max-w-screen-md">
          <a
            href="https://www.wsj.com/articles/crypto-startup-polkadot-seeking-new-token-sale-above-1-billion-valuation-11548377842"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={wsj.childImageSharp.fluid} alt={wsj.name} />
          </a>
          <a
            href="https://techcrunch.com/2018/10/23/parity-founder-demos-substrate-live-launches-a-blockchain-in-minutes-instead-of-days-or-weeks/"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={techCrunch.childImageSharp.fluid} alt={techCrunch.name} />
          </a>
          <a
            href="https://www.bloomberg.com/news/videos/2018-08-27/ethereum-co-founder-wood-sees-icos-evolving-video"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={bloomberg.childImageSharp.fluid} alt={bloomberg.name} />
          </a>
          <a
            href="https://www.forbes.com/sites/juttasteiner/2018/10/26/what-the-heck-is-web-3-0-anyway/"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={forbes.childImageSharp.fluid} alt={forbes.name} />
          </a>
          <a
            href="https://www.coindesk.com/internet-blockchains-project-polkadot-launches-first-proof-concept/"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={coindesk.childImageSharp.fluid} alt={coindesk.name} />
          </a>
          <a
            href="https://cointelegraph.com/news/parity-s-jutta-steiner-web-3-0-will-evolve-as-interoperability-and-usability-improve"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={cointelegraph.childImageSharp.fluid} alt={cointelegraph.name} />
          </a>
          <a
            href="https://www.acast.com/theeconomistbabbage/babbage-fixingtheinternet"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={economist.childImageSharp.fluid} alt={economist.name} />
          </a>
        </div>
      </div>
    </section>
  );
}
