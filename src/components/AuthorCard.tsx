import React, { useState, useEffect } from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import tagsData from '../../content/blog/tags.json';

interface AuthorCardProps {
  image: string;
  name: string;
  title: string;
  company: string;
  date: string;
  mdTags: Array<any>;
  timeToRead: string;
}

export default function AuthorCard(props: AuthorCardProps) {
  const { image, name, title, company, date, mdTags, timeToRead } = props;
  const { tags } = tagsData;
  const [tagsInfo, setTagsInfo] = useState([]);

  useEffect(() => {
    mdTags.forEach((mdTag: string) => {
      tags.filter((jsonTag: any) => {
        if (jsonTag.name === mdTag) {
          setTagsInfo(prevState => {
            return [...prevState, jsonTag];
          });
        }
      });
    });
  }, []);

  return (
    <div className="flex items-center bg-white py-4 px-1 sm:px-8 mb-4 ring-1 ring-black ring-opacity-5 shadow-sm">
      <div className="h-20 w-20">
        <img className="rounded-full" src={image} alt={name} />
      </div>
      <div className="text-xs sm:text-sm pl-3">
        <p className="my-0">
          <strong>{name}</strong>
        </p>
        <p className="my-0 text-textLight">
          {title} @ {company}
        </p>
        <p className="my-0 text-textLight">
          {date}
          {` `}in{` `}
          {tagsInfo.map((eachTag: any, index) => {
            return (
              <span key={index}>
                <a className="text-parityPink no-underline hover:underline" href={eachTag.link}>
                  {eachTag.name}
                </a>
                ,&nbsp;
              </span>
            );
          })}
        </p>
        <p className="my-0 text-textLight">{timeToRead} min read</p>
      </div>
    </div>
  );
}
