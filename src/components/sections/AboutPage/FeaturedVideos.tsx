import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../../Button';
import FullScreenYouTube from '../../FullScreenYouTube';
import { useIntl } from 'react-intl';

export default function FeaturedVideos() {
  const intl = useIntl();
  const images = useStaticQuery(graphql`
    {
      video1: file(relativePath: { eq: "video-thumbnail-1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            src
          }
        }
        name
      }
      video2: file(relativePath: { eq: "video-thumbnail-2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
      video3: file(relativePath: { eq: "video-thumbnail-3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            src
          }
        }
        name
      }
      video4: file(relativePath: { eq: "video-thumbnail-4.jpg" }) {
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            src
          }
        }
        name
      }
      video5: file(relativePath: { eq: "video-thumbnail-5.jpg" }) {
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            src
          }
        }
        name
      }
      video6: file(relativePath: { eq: "video-thumbnail-6.jpg" }) {
        childImageSharp {
          fluid(quality: 90, toFormat: PNG) {
            src
          }
        }
        name
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-dark-2 bg-cover bg-center bg-parityGray h-full">
      <div className="container">
        <div className="flex flex-row justify-between items-center pt-20 mt-0 mx-4 md:mb-0">
          <h4 className="">{intl.formatMessage({ id: 'about-page-featured-video-title' })}</h4>
          <p className="text-parityPink font-bold text-sm">
            <a
              className="no-underline hover:underline"
              href="https://www.youtube.com/channel/UCSs5vZi0U7qHLkUjF3QnaWg"
              target="_blank"
              rel="noreferrer"
            >
              {intl.formatMessage({ id: 'about-page-featured-youtube-cta' })}
            </a>
          </p>
        </div>
        <div className="md:flex md:flex-wrap md:justify-evenly">
          <FullScreenYouTube
            image={images.video1.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'about-page-video-one-title' })}
            title={intl.formatMessage({ id: 'about-page-video-one-subtitle' })}
            link="none"
            videoId="UIBR99gOLOQ"
          />
          <FullScreenYouTube
            image={images.video2.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'about-page-video-two-title' })}
            title={intl.formatMessage({ id: 'about-page-video-two-subtitle' })}
            link="none"
            videoId="ryTVNsABGJg"
          />
          <FullScreenYouTube
            image={images.video3.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'about-page-video-three-title' })}
            title={intl.formatMessage({ id: 'about-page-video-three-subtitle' })}
            link="none"
            videoId="WXq8AnGbPkE"
          />
          <FullScreenYouTube
            image={images.video4.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'about-page-video-four-title' })}
            title={intl.formatMessage({ id: 'about-page-video-four-subtitle' })}
            link="none"
            videoId="lIghiCmHz0U"
          />
          <FullScreenYouTube
            image={images.video5.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'about-page-video-five-title' })}
            title={intl.formatMessage({ id: 'about-page-video-five-subtitle' })}
            link="none"
            videoId="q1zLHO7Lkuk"
          />
          <FullScreenYouTube
            image={images.video6.childImageSharp.fluid.src}
            name={intl.formatMessage({ id: 'about-page-video-six-title' })}
            title={intl.formatMessage({ id: 'about-page-video-six-subtitle' })}
            link="none"
            videoId="vqGvbSZaxgI"
          />
        </div>
        <div className="flex flex-col items-center pt-12 pb-24 text-center">
          <h4 className="md:text-3xl pt-4 pb-4">{intl.formatMessage({ id: 'about-page-learn-about-parity' })}</h4>
          <Button link="/blog" extraClass="">
            {intl.formatMessage({ id: 'about-page-blog-cta' })}
          </Button>
        </div>
      </div>
    </section>
  );
}
