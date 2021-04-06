import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface TechCardProps {
  title: string;
  description: string;
  logo: string;
  link: string;
  extraClass: string;
  theme: string;
}

export default function TechCard(props: TechCardProps) {
  const { title, description, logo, link, extraClass, theme } = props;

  return (
    <>
      {theme === 'light' ? (
        <div className="bg-white m-6 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
          <LocalizedLink to={link} className="no-underline">
            <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
              <img className={`h-16 w-auto ${extraClass}`} src={logo} alt="" />
              <h6 className="m-3">{title}</h6>
              <p className="text-sm 2xl:w-2/3">{description}</p>
            </div>
          </LocalizedLink>
        </div>
      ) : null}

      {theme === 'dark' ? (
        <div className="bg-textDark text-gray-200 m-6 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
          <LocalizedLink to={link} className="no-underline">
            <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
              <img className={`h-16 w-auto ${extraClass}`} src={logo} alt="" />
              <h6 className="m-3">{title}</h6>
              <p className="text-sm 2xl:w-2/3">{description}</p>
            </div>
          </LocalizedLink>
        </div>
      ) : null}

      {theme === 'red' ? (
        <div className="bg-parityRed  text-gray-200 m-6 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
          <LocalizedLink to={link} className="no-underline">
            <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
              <img className={`h-16 w-auto ${extraClass}`} src={logo} alt="" />
              <h6 className="m-3">{title}</h6>
              <p className="text-sm 2xl:w-2/3">{description}</p>
            </div>
          </LocalizedLink>
        </div>
      ) : null}
    </>
  );
}
