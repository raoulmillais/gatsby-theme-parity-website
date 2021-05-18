import React, { useState, useEffect } from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';
import tagsData from '../../content/blog/tags.json';

interface BlogExcerptProps {
  title: string;
  link: string;
  date: string;
  mdTags: Array<any>;
  image: string;
  excerpt: string;
  timeToRead: string;
}

export default function BlogExcerpt(props: BlogExcerptProps) {
  const intl = useIntl();
  const { title, link, date, mdTags, image, excerpt, timeToRead } = props;
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
    <div className="container max-w-screen-md border-b animate-fade-in">
      <div className="text-center my-10 tracking-wide">
        <LocalizedLink className="no-underline hover:text-textLight" to={`/${link}`}>
          <h2 className="font-normal text-2xl md:text-4xl md:leading-tight mb-6">{title}</h2>
        </LocalizedLink>
        <p className="text-textLight text-sm my-0">
          {date}
          {` `}in{` `}
          {tagsInfo.map((eachTag: any, index) => {
            return (
              <span key={index}>
                <LocalizedLink className="text-parityPink no-underline hover:underline" to={eachTag.slug}>
                  {eachTag.name}
                </LocalizedLink>
                {index === tagsInfo.length - 1  ? '' : `, `}
              </span>
            );
          })}
        </p>
        <p className="text-textLight text-sm my-0">{timeToRead} min read</p>
      </div>
      <div>
        {image ? (
          <LocalizedLink to={`/${link}`}>
            <img className="rounded" src={image} alt={title} />
          </LocalizedLink>
        ) : (
          <div className="my-12"></div>
        )}
      </div>
      <p className="md:text-lg my-8">{excerpt}</p>
      <div className="text-sm mb-14">
        <LocalizedLink className="text-parityPink no-underline hover:underline" to={`/${link}`}>
          <strong>{intl.formatMessage({ id: 'blog-page-continue-reading' })}</strong>
        </LocalizedLink>
      </div>
    </div>
  );
}
