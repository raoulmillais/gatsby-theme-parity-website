import React from 'react';
import { useIntl } from 'react-intl';

export default function NewsFeatures() {
  const intl = useIntl();

  return (
    <section className="bg-textDark">
      <div className="container">
        <div className="text-gray-300 px-4 lg:px-28 py-24 lg:flex">
          <div className="lg:w-1/2">
            <h3 className="md:text-4xl lg:text-5xl">{intl.formatMessage({ id: 'solutions-page-custom-title' })}</h3>
          </div>
          <div className="lg:w-1/2 lg:text-lg">
            <p>{intl.formatMessage({ id: 'solutions-page-custom-paragraph-1' })}</p>
            <p>{intl.formatMessage({ id: 'solutions-page-custom-paragraph-2' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
