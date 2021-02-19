import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  link: string;
}

export default function BlogCard(props: BlogCardProps) {
  const { image, date, title, link } = props;
  return (
    <article className="bg-white mx-4 my-8 rounded-lg shadow h-full">
      <div className="object-cover h-2/3 md:h-3/4">
        <LocalizedLink to={link}>
          <img className="rounded-t-lg" src={image} />
        </LocalizedLink>
      </div>
      <div className="px-4 pb-3 h-1/3 md:h-1/4">
        <p className="text-xs text-textLight mb-0">{date}</p>
        <p className="font-normal my-1">{title}</p>
        <LocalizedLink className="text-xs text-parityPink no-underline hover:underline font-normal" to={link}>
          Read More
        </LocalizedLink>
      </div>
    </article>
  );
}
