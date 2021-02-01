import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function NewsFeatures() {
  const logoStyles = 'w-40 mx-3 my-1 h-auto';
  const images = useStaticQuery(graphql`
    {
      wsj: file(relativePath: { eq: "news-logos/logo-wsj-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      techCrunch: file(relativePath: { eq: "news-logos/logo-techcrunch-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      bloomberg: file(relativePath: { eq: "news-logos/logo-bloomberg-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      forbes: file(relativePath: { eq: "news-logos/logo-forbes-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      coindesk: file(relativePath: { eq: "news-logos/logo-coindesk-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      economist: file(relativePath: { eq: "news-logos/logo-economist-light.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `);
  const { wsj, techCrunch, bloomberg, forbes, coindesk, economist } = images;

  return (
    <section className="h-full border-b border-gray-700 pb-6 pt-6 bg-textDark">
      <div className="container text-center flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center opacity-50 ">
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
            href="https://www.acast.com/theeconomistbabbage/babbage-fixingtheinternet"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={economist.childImageSharp.fluid} alt={economist.name} />
          </a>
          <a
            href="https://www.coindesk.com/internet-blockchains-project-polkadot-launches-first-proof-concept/"
            target="_blank"
            rel="noreferrer"
          >
            <Img className={logoStyles} fluid={coindesk.childImageSharp.fluid} alt={coindesk.name} />
          </a>
        </div>
      </div>
    </section>
  );
}
