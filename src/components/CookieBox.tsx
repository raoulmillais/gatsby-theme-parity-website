import React from 'react';

interface CookieBoxProps {
  setLocalStorageData?: any;
}

const CookiesBox = (props: CookieBoxProps) => {
  return (
    <div className="">
      <div className="fixed bottom-0 sm:bottom-3 sm:right-3 max-w-md bg-cookieBg rounded-md shadow-2xl">
        <section className="text-white m-4">
          <p>
            By browsing this website, you are allowing cookies from third-party services. View our{' '}
            <a className="text-parityPink no-underline" href={`https://www.parity.io/privacy/`}>
              privacy policy
            </a>{' '}
            to learn more.
          </p>
        </section>
        <section className="text-white m-4 flex justify-between">
          <a
            className="bg-parityPink font-title text-lg text-white opacity-90 py-2 px-3 tracking-normal focus:outline-none no-underline transition-transform transform hover:-translate-y-0.5 rounded-md"
            onClick={() =>
              props.setLocalStorageData({
                cookiesBoxClicked: true,
                analytics: false,
              })
            }
          >
            Decline all
          </a>
          <a
            className="bg-parityPink font-title text-lg text-white opacity-90 py-2 px-3 tracking-normal focus:outline-none no-underline transition-transform transform hover:-translate-y-0.5 rounded-md"
            onClick={() =>
              props.setLocalStorageData({
                cookiesBoxClicked: true,
                analytics: true,
              })
            }
          >
            Accept
          </a>
        </section>
      </div>
    </div>
  );
};

export default CookiesBox;
