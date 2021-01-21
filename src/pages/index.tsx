import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import HeroPattern from '../components/sections/HeroPattern'
import HomeInto from '../components/sections/HomeIntro'
import BuildOnParity from '../components/sections/BuildOnParity'
import ParityTech from '../components/sections/ParityTech'
import CompaniesUsingOurTech from '../components/sections/CompaniesUsingOurTech'


export default function Index() {
  return (
    <Layout>
      <HeroPattern />
      <HomeInto />
      <BuildOnParity />
      <ParityTech />
      <CompaniesUsingOurTech />
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
