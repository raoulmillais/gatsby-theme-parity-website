import React from 'react';
import Button from './Button';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';

interface FooterCTAProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  subCTATextOne?: string;
  subCTATextTwo?: string;
  subCTATextLink?: string;
}

export default function FooterCTA(props: FooterCTAProps) {
  const intl = useIntl();
  const { title, buttonText, buttonLink, subCTATextOne, subCTATextTwo, subCTATextLink } = props;

  return (
    <section className="bg-parityGray h-full">
      <div className="container">
        <div className="flex flex-col items-center py-12 text-center">
          <h4 className="md:text-3xl pt-4 pb-4">{title}</h4>
          <Button link={buttonLink} extraClass="">
            {buttonText}
          </Button>
          <p className="text-xs py-4">
            {subCTATextOne}{' '}
            <LocalizedLink className="text-parityPink no-underline hover:underline" to={subCTATextLink}>
              {subCTATextTwo}
            </LocalizedLink>
          </p>
        </div>
      </div>
    </section>
  );
}
