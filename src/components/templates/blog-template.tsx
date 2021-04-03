import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';
import FeaturedBlogs from '../FeaturedBlogs';
import Social from '../Social';
import AuthorCard from '../AuthorCard';
import { LocalizedLink } from 'gatsby-theme-i18n';
import authorsData from '../../../content/blog/authors.json';

interface BlogTemplateProps {
  data: any;
  pageContext: any;
}

export default function BlogTemplate(props: BlogTemplateProps) {
  const { authors } = authorsData;
  const authorName = props.data.mdx.frontmatter.author;

  const authorsFiltered = authors.filter((author: any) => {
    if (author.name === authorName) {
      return true;
    }
  });
  const [authorInfo] = authorsFiltered;

  return (
    <Layout>
      <SEO title={props.data.mdx.frontmatter.blogTitle} />
      <section className="md:bg-hero-pattern bg-top bg-no-repeat bg-contain">
        <div className="md:flex md:justify-center">
          <article className="mx-4 font-normal md:text-lg xl:text-xl max-w-screen-md">
            <div className="">
              <div className="container h-full text-center pt-6 md:pt-12 pb-6 px-2 md:flex md:flex-col md:justify-center md:max-w-screen-md">
                <h3 className="md:text-4xl">{props.data.mdx.frontmatter.blogTitle}</h3>{' '}
              </div>
            </div>
            <AuthorCard
              image={authorInfo.avatar}
              name={props.data.mdx.frontmatter.author}ß
              authorPage={authorInfo.link}
              title={authorInfo.title}
              company={authorInfo.company}
              date={props.data.mdx.frontmatter.date_published}
              mdTags={props.data.mdx.frontmatter.tags}
              timeToRead={props.data.mdx.timeToRead}
            />
            {props.data.mdx.frontmatter.image ? (
              <div className="mb-12 ring-1 ring-black ring-opacity-5 shadow-xl">
                <img src={props.data.mdx.frontmatter.image} alt={props.data.mdx.frontmatter.title} />
              </div>
            ) : (
              <div className="my-12"></div>
            )}
            <div>
              {props.data.mdx ? (
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
              ) : (
                <div>This page hasn&apos;t been translated yet</div>
              )}
            </div>
            <div>
              <div className="text-center border my-20">
                <h3>
                  Want to build the future of the web?{' '}
                  <LocalizedLink className="text-parityPink no-underline hover:underline" to="/jobs">
                    We&apos;re hiring
                  </LocalizedLink>
                </h3>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* <h1>Context</h1>
      <pre>{JSON.stringify(props.pageContext, null, 2)}</pre> */}
      {/* <FeaturedBlogs /> */}
      <Social />
    </Layout>
  );ß
}

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(fields: { locale: { eq: $locale } }, frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date_published(formatString: "MMMM DD, YYYY")
        image
        slug
        tags
        blogTitle
      }
      body
      timeToRead
    }
  }
`;
