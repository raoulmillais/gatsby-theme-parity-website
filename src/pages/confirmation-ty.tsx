import React from 'react';
import Footer from '../components/layouts/Footer';
import parityLogo from '../images/parity_logo_light.png';

export default function ConfirmationAC() {
  return (
    <>
      <div className="h-screen bg-textDark text-white flex flex-col justify-center items-center">
        <a href="/">
          <img className="w-44 mb-16 opacity-40" src={parityLogo} alt="Parity Technologis Logo" />
        </a>
        <h1 className="text-center ">Thank you!</h1>
        <h4 className="text-center font-light">Thank you for subscribing to the newsletter.</h4>
        <hr className="border border-parityPink w-1/12" />
        <p className="text-center font-light">
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
