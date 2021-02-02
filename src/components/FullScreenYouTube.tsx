import React, { useState } from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface FullScreenYouTubeProps {
  image: string;
  name?: string;
  title?: string;
  link?: string;
  videoId: string;
}

export default function FullScreenYouTube(props: FullScreenYouTubeProps) {
  const { image, name, title, link, videoId } = props;
  const [showModal, setShowModal] = useState(false);
  const sectionBackground = {
    backgroundImage: `url('${image}')`,
    backgrdounRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <div className="m-4">
      <div style={sectionBackground}>
        <div className="flex justify-center items-center h-64 md:w-96">
          <div
            className="bg-white h-16 w-16 rounded-full flex justify-center items-center cursor-pointer hover:shadow-lg transition-shadow duration-500"
            onClick={() => setShowModal(!showModal)}
          >
            <svg
              className="fill-current text-textDark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-4 -3 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
            >
              <path d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="my-7">
        {link === 'none' ? (
          <p className="font-normal text-lg mb-0">{name}</p>
        ) : (
          <LocalizedLink
            to={link}
            className="font-normal text-lg mb-0 no-underline hover:text-parityPink hover:underline"
          >
            {name}
          </LocalizedLink>
        )}
        <p className="text-sm mt-1">{title}</p>
      </div>
      {showModal ? (
        <div
          onClick={() => setShowModal(!showModal)}
          className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-opacity-80 h-full w-full bg-black text-textDark flex justify-center items-center"
        >
          <iframe
            className="w-full md:w-2/3 h-1/3 md:h-2/3"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      ) : null}
    </div>
  );
}
