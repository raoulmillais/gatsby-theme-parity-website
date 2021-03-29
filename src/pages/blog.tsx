import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Layout from '../components/layouts/Layout';
import BlogExcerpt from '../components/BlogExcerpt';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';

interface BlogPageProps {
  data: any;
  pageContext: any;
}

export default function BlogPage(props: BlogPageProps) {
  const intl = useIntl();
  const { data } = props;

  return (
    <Layout theme="light">
      <SEO title={intl.formatMessage({ id: 'blog-page-seo' })} />
      <section className="bg-hero-blogPage bg-cover bg-center bg-fixed -mt-32 md:pb-48">
        <div className="text-white">
          <div className="container text-center pt-40 md:pt-52 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'blog-page-title' })}</h3>
            <p className="leading-9 px-4 mb-8 md:text-2xl md:px-12">
              {intl.formatMessage({ id: 'blog-page-description' })}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-4">
        {data.allMdx.edges.map((edge: any, index: any) => {
          return (
            <article key={index}>
              <BlogExcerpt
                title={edge.node.frontmatter.blogTitle}
                link={edge.node.frontmatter.slug}
                date={edge.node.frontmatter.date_published}
                mdTags={edge.node.frontmatter.tags}
                image={edge.node.frontmatter.image}
                excerpt={edge.node.excerpt}
                timeToRead={edge.node.timeToRead}
              />
            </article>
          );
        })}
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date_published, order: DESC }) {
      edges {
        node {
          frontmatter {
            blogTitle
            date_published(formatString: "MMMM DD, YYYY")
            tags
            image
            slug
          }
          excerpt(pruneLength: 220)
          timeToRead
        }
      }
    }
  }
`;
