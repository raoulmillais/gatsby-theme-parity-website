import React from 'react';

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
          <img className="" src={logo} alt="Parity Icons" />
        </div>
        <h4 className="font-normal md:text-xl m-3">{title}</h4>
        <p className="font-normal text-sm text-textLight mt-2">{description}</p>
      </div>
    </div>
  );
}
