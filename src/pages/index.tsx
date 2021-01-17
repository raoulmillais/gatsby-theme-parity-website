import * as React from 'react';
import { graphql } from 'gatsby';
import HeroPattern from '../components/sections/HeroPattern'
import HomeInto from '../components/sections/HomeIntro'
import Layout from '../components/layouts/Layout';

export default function Index() {
  return (
    <Layout>
      <HeroPattern />
      <HomeInto />
      <p>This is Homepage</p>
    </Layout>
  );
}

// TODO add graphql types
export const query = graphql`
  query($locale: String!) {
    allFile(filter: { sourceInstanceName: { eq: "blog" }, childMdx: { fields: { locale: { eq: $locale } } } }) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
