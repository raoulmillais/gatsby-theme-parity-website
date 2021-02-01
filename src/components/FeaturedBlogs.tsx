import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from './Button';
import { LocalizedLink } from 'gatsby-theme-i18n';
import BlogCard from './BlogCard';
import tempImage from '../images/defi-on-polkadot.png';
import { useIntl } from 'react-intl';

export default function FeaturedBlogs() {
  const intl = useIntl();

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray h-full">
      <div className="container pb-16">
        <h4 className="pt-20 mt-0 mx-4 md:mb-0">{intl.formatMessage({ id: 'homepage-featured-blog-heading' })}</h4>
        <div className="md:flex">
          <BlogCard
            image={tempImage}
            date="December 10, 2020"
            title="Defi on Polkadot: An Ecosystem Overview"
            link="/blog"
          />
          <BlogCard
            image={tempImage}
            date="December 10, 2020"
            title="Defi on Polkadot: An Ecosystem Overview"
            link="/blog"
          />
          <BlogCard
            image={tempImage}
            date="December 10, 2020"
            title="Defi on Polkadot: An Ecosystem Overview"
            link="/blog"
          />
        </div>
      </div>
    </section>
  );
}
