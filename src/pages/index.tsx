import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';

export default function Index() {
  return (
    <Layout>
      <h1>Home</h1>
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
