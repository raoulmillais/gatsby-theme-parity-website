import React from 'react';
import Footer from '../components/layouts/Footer';
import parityLogo from '../images/parity_logo_light.png';

export default function ConfirmationAC() {
  return (
    <>
      <div className="h-screen bg-textDark flex flex-col justify-center items-center">
        <a href="/">
          <img className="w-44 mb-16 opacity-40" src={parityLogo} alt="Parity Technologis Logo" />
        </a>

        <h1 className="font-normal pt-12 pb-4 md:p-0 md:mb-10 text-white md:text-6xl">Thank you!</h1>
        <h3 className="text-center font-light text-white">Thank you for subscribing to the newsletter.</h3>
        <hr className="border border-parityPink w-1/12" />
        <p className="text-center font-light text-white md:text-2xl">
          For more news, follow{' '}
          <a href="https://twitter.com/ParityTech" className="text-parityPink">
            @ParityTech
          </a>{' '}
          on Twitter.
        </p>
      </div>
      <Footer />
    </>
  );
}
