import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import BlogExcerpt from '../BlogExcerpt';
import Social from '../Social';
import StaticButton from '../StaticButton';

interface TagTemplateProps {
  data: any;
  pageContext: any;
}

export default function TagTemplate(props: TagTemplateProps) {
  const intl = useIntl();
  const { pageContext, data } = props;
  const [visibleBlogs, setVisibleBlogs] = useState(10);

  return (
    <Layout theme="light">
      <SEO title={`${pageContext.tag} Blogs`} />
      <section className="bg-hero-blogPage bg-auto bg-bottom bg-fixed -mt-32 md:pb-64">
        <div className="text-white">
          <div className="container text-center pt-40 md:pt-64 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-3/4">
            <h3 className="md:text-5xl">{intl.formatMessage({ id: 'blog-page-title' })}</h3>
            <p className="leading-9 px-4 mb-8 md:text-2xl md:px-12">{pageContext.tag}</p>
          </div>
        </div>
      </section>
      <section className="mx-4">
        {data.allMdx.edges.slice(0, visibleBlogs).map((edge: any, index: any) => {
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
        <div className="flex justify-center my-10">
          {visibleBlogs < data.allMdx.edges.length ? (
            <div onClick={() => setVisibleBlogs(visibleBlogs + 10)}>
              <StaticButton>Load more</StaticButton>
            </div>
          ) : null}
        </div>
      </section>
      <Social />
    </Layout>
  );
}

export const query = graphql`
  query($tag: String!) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___date_published, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            author
            blogTitle
            date_published(formatString: "MMMMM DD, YYYY")
            image
            slug
            tags
          }
          excerpt(pruneLength: 220)
          timeToRead
        }
      }
    }
  }
`;
