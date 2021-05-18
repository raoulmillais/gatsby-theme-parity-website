import React, { useState } from 'react';

interface FullWidthYouTubeProps {
  image: string;
  videoId: string;
}

export default function FullWidthYouTube(props: FullWidthYouTubeProps) {
  const { image, videoId } = props;
  const [showModal, setShowModal] = useState(false);
  const sectionBackground = {
    backgroundImage: `url('${image}')`,
    backgrdounRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  return (
    <div>
      <div style={sectionBackground}>
        <div className="h-64 xl:h-96 w-auto flex justify-center items-center">
          <div
            className="bg-white h-12 w-12 rounded-full flex justify-center items-center cursor-pointer transition-all transform duration-500 hover:-translate-y-0.5 hover:shadow-lg"
            onClick={() => setShowModal(!showModal)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
              <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#000000" />
            </svg>
          </div>
        </div>
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
