import React from 'react';
import { useIntl } from 'react-intl';
import coverImage from '../images/cover-newsletter.jpeg';
import Newsletter from '../components/NewsletterModal';
import Footer from '../components/layouts/Footer';
import SEO from '../components/layouts/SEO';

export default function NewsletterPage() {
  const intl = useIntl();

  return (
    <>
      <SEO title="Newsletter" />
      <div className="lg:flex lg:justify-center">
        <div className="lg:w-1/2 lg:h-full">
          <img
            className="object-cover object-center h-60 w-full lg:h-full lg:w-auto"
            src={coverImage}
            alt="Newsletter Cover Image"
          />
        </div>
        <div className="text-center mx-auto py-12 lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h3 className="font-normal mx-auto mx-6 max-w-lg lg:text-4xl lg:leading-tight">
            {intl.formatMessage({ id: 'newsletter-page-title' })}
          </h3>
          <Newsletter sourcePage="newsletter" />
        </div>
      </div>
      <Footer />
    </>
  );
}
