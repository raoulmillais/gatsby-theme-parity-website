import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface TechCardProps {
  title: string;
  description: string;
  logo: string;
  link: string;
  extraClass: string;
}

export default function TechCard(props: TechCardProps) {
  const { title, description, logo, link, extraClass } = props;

  return (
    <div className="bg-white m-6 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3">
      <LocalizedLink to={link} className="no-underline">
        <div className="px-4 py-6 flex flex-col items-center">
          <img className={`h-16 w-auto ${extraClass}`} src={logo} alt="" />
          <h6 className="m-3">{title}</h6>
          <p className="text-sm 2xl:w-2/3">{description}</p>
        </div>
      </LocalizedLink>
    </div>
  );
}
