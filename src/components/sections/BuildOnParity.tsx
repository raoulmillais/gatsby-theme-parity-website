import React from 'react';
import { useIntl } from 'react-intl';
import { LocalizedLink } from 'gatsby-theme-i18n';
import image from '../../images/world-food-programme.jpg';

export default function BuildOnParity() {
  const intl = useIntl();

  return (
    <section>
      <div className="2xl:container md:flex ">
        <div className="h-64 md:h-96 md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="World Food Programme build on Parity Technologie"
          />
        </div>
        <div className="text-textDark px-6 pb-12 md:w-1/2 lg:flex lg:justify-center">
          <div className="lg:w-2/3">
            <h6 className="text-xs uppercase tracking-wide">
              {intl.formatMessage({ id: 'homepage-build-on-parity-tech' })}
            </h6>
            <h4 className="md:text-3xl">{intl.formatMessage({ id: 'homepage-build-on-parity-tech-title' })}</h4>
            <p>{intl.formatMessage({ id: 'homepage-build-on-parity-tech-description' })}</p>
            <span className="text-xs text-parityPink font-bold">
              <LocalizedLink
                className="no-underline"
                to="/un-world-food-programme-uses-parity-ethereum-to-aid-100-000-refugees/"
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
