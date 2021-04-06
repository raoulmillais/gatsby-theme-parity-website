import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface CardNoLinkProps {
  title: string;
  description: string;
  logo?: string;
}

export default function CardNoLink(props: CardNoLinkProps) {
  const { title, description, logo } = props;

  return (
    <div className="bg-white m-6 text-center md:w-1/3 shadow rounded-md">
      <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
        <div className="object-center object-contain">
          <img className="" src={logo} alt="" />
        </div>
        <h6 className="m-3">{title}</h6>
        <p className="text-sm text-textLight 2xl:w-2/3">{description}</p>
      </div>
    </div>
  );
}
