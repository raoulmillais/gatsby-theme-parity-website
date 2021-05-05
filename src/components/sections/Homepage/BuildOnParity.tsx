import React from 'react';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import image from '../../../images/world-food-programme.jpg';

export default function BuildOnParity() {
  const intl = useIntl();

  return (
    <section>
      <div className="md:flex ">
        <div className="h-64 md:h-96 md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="World Food Programme build on Parity Technologie"
          />
        </div>
        <div className="text-textDark px-6 py-6 md:w-1/2 lg:flex lg:justify-center lg:items-center">
          <div className="lg:w-2/3 ">
            <h6 className="text-xs uppercase tracking-wide mb-10 md:mb-8">
              {intl.formatMessage({ id: 'homepage-build-on-parity-tech' })}
            </h6>
            <h3 className="text-2xl xl:text-3xl font-normal">
              {intl.formatMessage({ id: 'homepage-build-on-parity-tech-title' })}
            </h3>
            <p className="font-light text-lg text-textDark">
              {intl.formatMessage({ id: 'homepage-build-on-parity-tech-description' })}
            </p>
            <span className="text-xs text-parityPink font-bold">
              <LocalizedLink
                className="no-underline"
                to="blog/un-world-food-programme-uses-parity-ethereum-to-aid-100-000-refugees/"
              >
                {intl.formatMessage({ id: 'homepage=build-on-parity-tech-button' })} »
              </LocalizedLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
