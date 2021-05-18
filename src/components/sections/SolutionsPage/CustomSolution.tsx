import React from 'react';
import { useIntl } from 'react-intl';

export default function NewsFeatures() {
  const intl = useIntl();

  return (
    <section className="bg-textDark">
      <div className="container">
        <div className="text-gray-300 px-8 lg:px-0 py-24 lg:py-32 lg:flex lg:justify-between">
          <div className="lg:w-1/2">
            <h4 className="text-gray-300 font-normal text-3xl md:text-5xl md:leading-tight mb-6 lg:max-w-lg">
              {intl.formatMessage({ id: 'solutions-page-custom-title' })}
            </h4>
          </div>
          <div className="text-lg lg:w-1/2 lg:text-xl tracking-wide">
            <p className="font-light lg:pb-4">{intl.formatMessage({ id: 'solutions-page-custom-paragraph-1' })}</p>
            <p className="font-light lg:pb-4">{intl.formatMessage({ id: 'solutions-page-custom-paragraph-2' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
