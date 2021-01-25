import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import HeroPattern from '../components/sections/Homepage/HeroPattern';
import HomeInto from '../components/sections/Homepage/HomeIntro';
import BuildOnParity from '../components/sections/Homepage/BuildOnParity';
import ParityTech from '../components/sections/Homepage/ParityTech';
import CompaniesUsingOurTech from '../components/sections/Homepage/CompaniesUsingOurTech';
import ParityTeam from '../components/sections/Homepage/ParityTeam';
import NewsFeatures from '../components/sections/Homepage/NewsFeatures';
import FeaturedBlog from '../components/FeaturedBlogs';
import Social from '../components/Social';

export default function Index() {
  return (
    <Layout>
      <HeroPattern />
      <HomeInto />
      <BuildOnParity />
      <ParityTech />
      <CompaniesUsingOurTech />
      <ParityTeam />
      <NewsFeatures />
      <FeaturedBlog />
      <Social />
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
