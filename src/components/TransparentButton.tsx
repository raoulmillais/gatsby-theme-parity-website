import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface TransparentButtonProps {
  children: React.ReactNode;
  link: string;
  extraClass: string;
}

const buttonStyles = 'bg-transparent border font-title text-lg text-white  px-12 py-2 rounded-sm uppercase focus:outline-none';
const hoverStyles = 'transition-transform transform hover:-translate-y-0.5';

export default function TransparentButton(props: TransparentButtonProps) {
  return (
    <LocalizedLink to={props.link} className="w-max mx-auto">
      <button type="button" className={`${buttonStyles} ${hoverStyles} ${props.extraClass}`}>
        {props.children}
      </button>
    </LocalizedLink>
  );
}
