import React from 'react';
import bannerData from '../../content/banner/banner.json';

export default function Banner() {
  return (
    <div
      className={` ${
        bannerData.active && bannerData.pages.includes(location.pathname) ? `block` : `hidden`
      } bg-textDark text-parityWhite tracking-wide text-center text-sm px-6 py-3`}
    >
      <p className="mb-0">
        {bannerData.text}
        {` `}
        {bannerData.emoji}
        {` `}{' '}
        <a href={bannerData.url} target="_blank" rel="noreferrer">
          {bannerData['link-text']}
        </a>{' '}
      </p>
    </div>
  );
}
