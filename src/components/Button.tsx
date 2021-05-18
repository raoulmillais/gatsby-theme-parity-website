import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  extraClass?: string;
}

const buttonStyles =
  'bg-parityPink font-title text-lg text-white font-semibold opacity-90 tracking-wider px-12 py-2 rounded-sm focus:outline-none uppercase';
const hoverStyles = 'transition-transform transform hover:-translate-y-0.5';
const focusStyles = 'focus:bg-buttonRed';

export default function Button(props: ButtonProps) {
  return (
    <LocalizedLink to={props.link} className="w-max mx-auto">
      <button type="button" className={`${buttonStyles} ${hoverStyles} ${focusStyles} ${props.extraClass}`}>
        {props.children}
      </button>
    </LocalizedLink>
  );
}
