import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../components/layouts/SEO';
import Social from '../components/Social';
import { useIntl } from 'react-intl';

export default function ApplicantNoticePage() {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Applicant Privacy Notice" />
      <section className="bg-parityGray -mt-32">
        <div className="h-full md:pt-32">
          <div className="container h-full text-center pt-40 md:pt-24 pb-6 px-2 md:flex md:flex-col md:justify-center md:max-w-screen-md">
            <h3 className="md:text-4xl">{intl.formatMessage({ id: 'collaborate-page-title' })}</h3>
            <p className="leading-9 mb-8 text-textDark md:text-2xl md:px-12">
              {intl.formatMessage({ id: 'collaborate-page-description' })}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-parityGray pb-20">
        <div className="flex justify-center">
          <div className="flex-grow place-content-center">
            <iframe
              className="w-full"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdBADP87fFHLoi_9nNujkK-AnMr6uopojaeJkTWUdainsPFZA/viewform?embedded=true"
              width="640"
              height="1365"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
      <Social />
    </Layout>
  );
}
