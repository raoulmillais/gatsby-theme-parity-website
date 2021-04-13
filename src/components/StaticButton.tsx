import React from 'react';

interface StaticButtonProps {
  children: React.ReactNode;
  extraClass?: string;
}

const buttonStyles =
  'bg-parityPink font-title text-lg text-white opacity-90 tracking-wider  px-12 py-2 focus:outline-none uppercase';
const hoverStyles = 'transition-transform transform hover:-translate-y-0.5';
const focusStyles = 'focus:bg-buttonRed';

export default function Button(props: StaticButtonProps) {
  return (
    <button type="button" className={`${buttonStyles} ${hoverStyles} ${focusStyles} ${props.extraClass}`}>
      {props.children}
    </button>
  );
}
