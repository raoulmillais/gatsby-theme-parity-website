import React from 'react';
import Button from '../../Button';
import { useIntl } from 'react-intl';

export default function ParityTech() {
  const intl = useIntl();

  return (
    <section className="md:bg-hero-pattern-dark bg-cover bg-center bg-parityGray">
      <div className="container py-16 md:pt-16 md:pb-20 flex flex-col items-center text-center ">
        <div className="px-4 max-w-3xl md:py-8">
          <h3 className="font-normal md:text-5xl md:pb-5">{intl.formatMessage({ id: 'soltuions-page-cta-title' })}</h3>
          <Button extraClass="" link="/collaborate/">
            {intl.formatMessage({ id: 'solutions-page-cta' })}
          </Button>
        </div>
      </div>
    </section>
  );
}
