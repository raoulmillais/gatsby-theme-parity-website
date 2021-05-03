import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import { useIntl } from 'react-intl';
import Img from 'gatsby-image';
import Social from '../../components/Social';
import SEO from '../../components/layouts/SEO';

interface GavinWoodProps {
  data: any;
}

export default function GavinWood(props: GavinWoodProps) {
  const { data } = props;
  const intl = useIntl();

  return (
    <Layout theme="">
      <SEO title={intl.formatMessage({ id: 'gavin-wood-page-seo' })} />
      <div className="">
        <h3 className="font-normal text-center pt-24 pb-6 px-1 md:px-8 mx-auto  max-w-3xl md:text-5xl md:leading-tight">
          {intl.formatMessage({ id: 'gavin-wood-page-title' })}
        </h3>
        <div className="w-screen">
          <Img
            fluid={data.gavinMainImage.childImageSharp.fluid}
            alt={intl.formatMessage({ id: 'gavin-wood-page-main-image-caption' })}
          />
          <caption className="flex text-xs text-textLight italic ml-4 my-2">
            {intl.formatMessage({ id: 'gavin-wood-page-main-image-caption' })}
          </caption>
        </div>
        <div className="max-w-3xl mx-auto text-lg font-normal text-textDark px-4 pb-24">
          <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'gavin-wood-page-paragraph-one' }) }} />
          <h4 className="mb-6 md:text-2xl md:font-semibold">
            {intl.formatMessage({ id: 'gavin-wood-page-subtitle-one' })}
          </h4>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-two' })}</p>
          <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'gavin-wood-page-paragraph-three' }) }} />
          <div>
            <iframe
              className="w-full h-72 md:h-96"
              src="https://www.youtube.com/embed/UIBR99gOLOQ?feature=oembed"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <caption className="flex text-xs text-textLight italic my-4">
              {intl.formatMessage({ id: 'gavin-wood-page-video-caption' })}
            </caption>
          </div>
          <h4 className="mb-6 md:text-2xl md:font-semibold">
            {intl.formatMessage({ id: 'gavin-wood-page-subtitle-two' })}
          </h4>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-four' })}</p>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-five' })}</p>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-six' })}</p>
          <h4 className="mb-6 md:text-2xl md:font-semibold">
            {intl.formatMessage({ id: 'gavin-wood-page-subtitle-three' })}
          </h4>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-seven' })}</p>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-eight' })}</p>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-nine' })}</p>
          <p>{intl.formatMessage({ id: 'gavin-wood-page-paragraph-ten' })}</p>
          <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'gavin-wood-page-paragraph-eleven' }) }} />
        </div>
      </div>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    gavinMainImage: file(relativePath: { eq: "gavin-wood-web3-summit.jpg" }) {
      name
      childImageSharp {
        fluid(toFormat: PNG, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
