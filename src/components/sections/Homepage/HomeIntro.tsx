import React from 'react';
import { useIntl } from 'react-intl';
import imageOne from '../../../images/intro-image-1.jpg';
import imageTwo from '../../../images/intro-image-2.jpg';

export default function HeroPattern() {
  const intl = useIntl();

  return (
    <section id="intro" className="bg-parityGray h-full">
      <div className="container flex  flex-col px-4 ">
        <div className="mt-12 md:flex md:justify-center">
          <div className="hidden md:inline-block md:w-1/2 md:mx-4 md:my-4 max-w-md">
            <img className="w-auto h-auto mx-auto " src={imageOne} alt="parity intro image" />
          </div>
          <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
            <h3 className="text-2xl md:text-3xl">{intl.formatMessage({ id: 'homepage-intro-section-one-title' })}</h3>
            <p className="text-lg">{intl.formatMessage({ id: 'homepage-intro-section-one-text-one' })}</p>
            <p className="text-lg">{intl.formatMessage({ id: 'homepage-intro-section-one-text-two' })}</p>
            <hr className="border-1 border-parityPink w-12" />
            <p className="text-sm leading-6">{intl.formatMessage({ id: 'homepage-intro-section-one-text-three' })}</p>
          </div>
        </div>
        <div className="mt-12 md:flex md:justify-center md:flex-row-reverse">
          <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
            <img className="w-auto h-auto mx-auto my-12" src={imageTwo} alt="parity intro image" />
          </div>
          <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
            <span>
              <h3 className="text-2xl md:text-3xl">{intl.formatMessage({ id: 'homepage-intro-section-two-title' })}</h3>
              <h3 className="text-2xl md:text-3xl">
                {intl.formatMessage({ id: 'homepage-intro-section-two-subtitle' })}
              </h3>
            </span>
            <ul>
              <li className="text-base md:text-xl font-light">
                {intl.formatMessage({ id: 'homepage-intro-section-two-line-items-1' })}
              </li>
              <li className="text-base md:text-xl font-light">
                {intl.formatMessage({ id: 'homepage-intro-section-two-line-items-2' })}
              </li>
              <li className="text-base  md:text-xl font-light">
                {intl.formatMessage({ id: 'homepage-intro-section-two-line-items-3' })}
              </li>
              <li className="text-base  md:text-xl font-light">
                {intl.formatMessage({ id: 'homepage-intro-section-two-line-items-4' })}
              </li>
              <li className="text-base  md:text-xl font-light">
                {intl.formatMessage({ id: 'homepage-intro-section-two-line-items-5' })}
              </li>
            </ul>
            <hr className="border-1 border-parityPink w-12" />
            <p className="text-sm leading-6 mb-16">{intl.formatMessage({ id: 'homepage-intro-section-two-text' })}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
