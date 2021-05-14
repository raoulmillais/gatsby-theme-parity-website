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
      <section className="bg-parityWhite -mt-32">
        <div className="h-full md:pt-32">
          <div className="container h-full text-center pt-40 md:pt-24 pb-6 px-2 md:flex md:flex-col md:justify-center md:max-w-screen-lg">
            <h3 className="text-textDark text-center font-normal md:text-5xl md:mb-8">
              {intl.formatMessage({ id: 'collaborate-page-title' })}
            </h3>
            <h4 className="text-textDark font-normal leading-relaxed px-4 mb-8 text-lg md:text-2xl md:px-24">
              {intl.formatMessage({ id: 'collaborate-page-description' })}
            </h4>
          </div>
        </div>
      </section>
      <section className="bg-parityWhite pb-20">
        <div className="flex justify-center">
          <div className="flex-grow place-content-center">
            <iframe
              className="w-full h-googleForm overflow-y-hidden"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdBADP87fFHLoi_9nNujkK-AnMr6uopojaeJkTWUdainsPFZA/viewform?embedded=true"
              width="640"
              height="1365"
              frameBorder="0"
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
