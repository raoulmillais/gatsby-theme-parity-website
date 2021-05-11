import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  keywords?: string;
  url?: string;
  children?: React.ReactNode;
}

// TODO add graphql types
export default function SEO(props: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
            keywords
          }
        }
      }
    `
  );
  const metaDescription = props.description || site.siteMetadata.description;
  const metaTitle = props.title || site.siteMetadata.title;
  const metaAuthor = props.author || site.siteMetadata.author;
  const metaUrl = props.url || site.siteMetadata.siteUrl;
  const metaImage = props.image || site.siteMetadata.image;
  const metaKeywords = props.keywords || site.siteMetadata.keywords;

  return (
    <Helmet
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
}
