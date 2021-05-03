import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from './BlogCard';
import { useIntl } from 'react-intl';

export default function FeaturedBlogs() {
  const intl = useIntl();

  const recentThreeBlogs = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date_published, order: DESC }, limit: 3) {
        edges {
          node {
            frontmatter {
              blogTitle
              date_published(formatString: "MMMM DD, YYYY")
              image
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityWhite h-full">
      <div className="container pb-16">
        <h4 className="md:text-2xl font-medium pt-20 mt-0 mx-4 md:mb-0">
          {intl.formatMessage({ id: 'homepage-featured-blog-heading' })}
        </h4>
        <div className="md:flex">
          {recentThreeBlogs.allMdx.edges.map((post: any, index: number) => (
            <BlogCard
              image={post.node.frontmatter.image}
              date={post.node.frontmatter.date_published}
              title={post.node.frontmatter.blogTitle}
              link={post.node.frontmatter.slug}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
