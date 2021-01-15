import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';

// TODO add graphql types
interface BlogTemplateProps {
  data: any;
  pageContext: any;
}

export default function BlogTemplate(props: BlogTemplateProps) {
  return (
    <Layout>
      <SEO title={props.data.mdx.frontmatter.title} />
      <h1>Data</h1>
      <div>
        {props.data.mdx ? (
          <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        ) : (
          <div>This page hasn&apos;t been translated yet</div>
        )}
      </div>
      <h1>Context</h1>
      <pre>{JSON.stringify(props.pageContext, null, 2)}</pre>
    </Layout>
  );
}

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(fields: { locale: { eq: $locale } }, frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`;
