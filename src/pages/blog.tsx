import React from 'react';
import { useIntl } from 'react-intl';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';

export default function BlogPage() {
  const intl = useIntl();

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
    </Layout>
  );
}
