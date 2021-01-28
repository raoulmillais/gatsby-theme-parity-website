import React from 'react';
import { useIntl } from 'react-intl';
import imageOne from '../../../images/image-10.jpg';
import imageTwo from '../../../images/image-11.jpg';

export default function AboutIntro() {
  const intl = useIntl();

  return (
    <section id="about" className="bg-white h-full">
      <div className="container flex  flex-col px-4 ">
        <div className="mt-12 md:flex md:justify-center">
          <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
            <img className="w-auto h-auto mx-auto " src={imageTwo} alt="parity intro image" />
          </div>
          <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
            <h3 className="text-2xl md:text-3xl">{intl.formatMessage({ id: 'about-page-text-block-one-title' })}</h3>
            <p className="text-lg">{intl.formatMessage({ id: 'about-page-text-block-one-description' })}</p>
            <hr className="border-1 border-parityPink w-12" />
          </div>
        </div>
        <div className="mt-12 md:flex md:justify-center md:flex-row-reverse">
          <div className="md:w-1/2 md:mx-4 md:my-4 max-w-md">
            <img className="w-auto h-auto mx-auto my-12" src={imageOne} alt="parity intro image" />
          </div>
          <div className="md:w-1/2 md:mx-4 md:flex md:flex-col md:justify-center">
            <h3 className="text-2xl md:text-3xl">{intl.formatMessage({ id: 'about-page-text-block-two-title' })}</h3>
            <p className="text-lg">{intl.formatMessage({ id: 'about-page-text-block-one-description' })}</p>
            <hr className="border-1 border-parityPink w-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
