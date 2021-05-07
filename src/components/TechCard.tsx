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
        <div className="bg-white m-4 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
          <LocalizedLink to={link} className="no-underline">
            <div className="px-4 pt-6 pb-6 flex flex-col items-center">
              <img className={`h-16 w-auto ${extraClass}`} src={logo} alt="Parity Technology Logo" />
              <h4 className="m-6">{title}</h4>
              <p className="text-sm md:text-base text-textDark leading-7 2xl:w-2/3">{description}</p>
            </div>
          </LocalizedLink>
        </div>
      ) : null}

      {theme === 'dark' ? (
        <div className="bg-textDark text-gray-200 m-4 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
          <LocalizedLink to={link} className="no-underline">
            <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
              <img className={`h-16 w-auto ${extraClass}`} src={logo} alt="Parity Technology Logo" />
              <h6 className="m-3 text-lg md:text-xl text-gray-200">{title}</h6>
              <p className="text-sm md:text-base leading-7 2xl:w-2/3">{description}</p>
            </div>
          </LocalizedLink>
        </div>
      ) : null}

      {theme === 'red' ? (
        <div className="bg-parityRed  text-gray-200 m-4 text-center hover:shadow-2xl transition-shadow duration-500 cursor-pointer md:w-1/3 rounded-md">
          <LocalizedLink to={link} className="no-underline">
            <div className="px-4 pt-6 pb-6 md:pb-16 flex flex-col items-center">
              <svg
                className="w-16 h-16 fill-current text-white opacity-70"
                role="img"
                xmlns="http://www.w3.org/1999/xlink"
                viewBox="5 5 20 20"
              >
                <path d="M18.944 26.128H13.743s.007-1.544 0-2.602c-3.56.766-4.553-1.951-4.553-1.951-.65-1.301-1.301-1.951-1.301-1.951-1.301-.773 0-.65 0-.65 1.301 0 1.951 1.301 1.951 1.301 1.142 1.938 3.173 1.626 3.903 1.301 0-.65.285-1.634.65-1.951-2.841-.32-5.207-1.951-5.207-5.204s.653-3.903 1.304-4.553c-.131-.321-.676-1.506.02-3.252 0 0 1.278 0 2.579 1.951.645-.645 2.602-.65 3.253-.65.649 0 2.607.006 3.251.65 1.301-1.951 2.582-1.951 2.582-1.951.695 1.747.152 2.932.02 3.252.65.65 1.301 1.301 1.301 4.553s-2.362 4.884-5.204 5.204c.366.317.65 1.437.65 1.951l.002 4.552z" />
              </svg>
              <h6 className="m-3 text-lg md:text-xl text-gray-200">{title}</h6>
              <p className="text-sm md:text-base leading-7 2xl:w-2/3">{description}</p>
            </div>
          </LocalizedLink>
        </div>
      ) : null}
    </>
  );
}
