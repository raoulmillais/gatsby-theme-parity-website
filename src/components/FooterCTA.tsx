import React from 'react';
import Button from './Button';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface FooterCTAProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  subCTATextOne?: string;
  subCTATextTwo?: string;
  subCTATextLink?: string;
  theme?: string;
}

export default function FooterCTA(props: FooterCTAProps) {
  const { title, buttonText, buttonLink, subCTATextOne, subCTATextTwo, subCTATextLink } = props;

  return (
    <section className="bg-parityGray h-full">
      <div className="container">
        <div className="flex flex-col items-center py-12 text-center">
          <h4 className="text-2xl md:text-4xl font-normal mb-10">{title}</h4>
          <Button link={buttonLink} extraClass="">
            {buttonText}
          </Button>
          <p className="text-xs text-textDark py-10 md:py-4">
            {subCTATextOne}{' '}
            <LocalizedLink className="text-parityPink" to={subCTATextLink}>
              {subCTATextTwo}
            </LocalizedLink>
          </p>
        </div>
      </div>
    </section>
  );
}
