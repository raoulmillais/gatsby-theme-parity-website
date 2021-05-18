import React from 'react';
import { useIntl } from 'react-intl';

export default function NextBlockchain() {
  const intl = useIntl();

  return (
    <section className="h-full">
      <div className="container px-8 pt-12 md:pt-24 pb-20 md:pb-32 max-w-5xl">
        <h3 className="text-center py-6 font-normal md:text-4xl lg:text-5xl">
          {intl.formatMessage({ id: 'solutions-page-blockchain-title' })}
        </h3>
        <div className="md:flex ">
          <div className="md:w-1/2 md:pl-8">
            <p className="text-textDark font-light md:text-lg tracking-wide">
              {intl.formatMessage({ id: 'solutions-page-blockchain-paragraph-1' })}
            </p>
            <p className="text-textDark font-light md:text-lg tracking-wide">
              {intl.formatMessage({ id: 'solutions-page-blockchain-paragraph-2' })}
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-textDark font-light md:text-lg tracking-wide">
              {intl.formatMessage({ id: 'solutions-page-blockchain-paragraph-3' })}
            </p>
            <p className="text-textDark font-light md:text-lg tracking-wide">
              {intl.formatMessage({ id: 'solutions-page-blockchain-paragraph-4' })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
