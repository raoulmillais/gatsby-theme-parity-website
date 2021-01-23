import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../Button';
import { LocalizedLink } from 'gatsby-theme-i18n';
import BlogCard from '../BlogCard';
import tempImage from '../../images/defi-on-polkadot.png'
import { useIntl } from 'react-intl';

export default function FeaturedBlogs() {
  const intl = useIntl();

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray h-full">
      <div className="container">
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
        <div className="flex flex-col items-center pb-12 text-center">
          <h4 className="md:text-3xl pt-4 pb-4">{intl.formatMessage({ id: 'homepage-featured-blog-title' })}</h4>
          <Button link="/technologies" extraClass="">
            {intl.formatMessage({ id: 'homepage-featured-blog-cta' })}
          </Button>
          <p className="text-xs py-4">
            {intl.formatMessage({ id: 'homepage-featured-blog-subtext' })}{' '}
            <LocalizedLink className="text-parityPink no-underline hover:underline" to="/solutions">
              {intl.formatMessage({ id: 'homepage-featured-blog-subtext-link' })}
            </LocalizedLink>
          </p>
        </div>
      </div>
    </section>
  );
}
