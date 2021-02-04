import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Button from '../components/Button';
import { useIntl } from 'react-intl';

interface NotFoundPageProps {
  data: any;
}

export default function NotFoundPage({ data }: NotFoundPageProps) {
  const intl = useIntl();

  return (
    <Layout theme="light">
      <SEO title="Blockchain Infrastructure for the Decentralised Web" />
      <section className="bg-textDark -mt-24 xl:-mt-32 border-b border-parityBorder">
        <div className="h-screen">
          <div className="container h-full text-center max-w-4xl pt-64 md:pt-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:items-center md:w-2/3">
            <img
              className="mx-auto w-28 h-auto py-4"
              src={data.brokenChain.childImageSharp.fluid.src}
              alt="Polkadot Logo"
            />
            <h3 className="md:text-5xl text-parityWhite">{intl.formatMessage({ id: '404-page-title' })}</h3>
            <h3 className="text-textLight pb-8">{intl.formatMessage({ id: '404-page-description' })}</h3>
            <Button extraClass=" " link="/">
              {intl.formatMessage({ id: '404-page-cta' })}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  {
    brokenChain: file(relativePath: { eq: "broken-chain.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;
