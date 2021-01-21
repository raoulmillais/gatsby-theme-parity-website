import React from 'react';
import Button from '../Button';
import { useIntl } from 'react-intl';

export default function HeroPattern() {
  const intl = useIntl();

  return (
    <section className="md:bg-hero-pattern bg-cover bg-center -mt-32">
      <div className="md:h-screen">
        <div className="container h-full text-center pt-40 md:pt-0 md:pb-0 pb-16 px-2 md:flex md:flex-col md:justify-center md:w-2/3">
          <h3 className="md:text-4xl">{intl.formatMessage({ id: 'homepage-hero-title' })}</h3>
          <p className="leading-9 mb-8 text-textDark md:text-2xl md:px-12">
            {intl.formatMessage({ id: 'homepage-hero-description' })}
          </p>
          <Button link="/#intro">{intl.formatMessage({ id: 'homepage-hero-cta' })}</Button>
        </div>
      </div>
    </section>
  );
}
