import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

///////////////---STYLES---///////////////////
const modalDiv =
  'fixed top-0 bottom-0 left-0 right-0 z-10 bg-opacity-80 h-full w-full bg-black text-textDark flex justify-center items-center';
const whiteContainer = 'relative w-full mx-4 rounded-md bg-white flex flex-col justify-center items-center sm:w-96';
const closeX = 'absolute top-0 right-0 pt-2 pr-3 opacity-40 hover:opacity-100 cursor-pointer';
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const NewsletterModal = () => {
  const intl = useIntl();
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    showModal ? (document.body.style.overflow = `hidden`) : (document.body.style.overflow = `unset`);
  }, [showModal]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('https://paritytechnologies.activehosted.com/proc.php', {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    })
      .then(response => {
        console.log(response);
        setFormSubmitted(!formSubmitted);
        setTimeout(() => {
          setFormSubmitted(false);
          setShowModal(!showModal);
        }, 5000);
      })
      .catch(error => console.log('Request failed', error));
  };

  return (
    <>
      <button
        className="mt-6 bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-24 py-2 focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5"
        onClick={() => setShowModal(!showModal)}
      >
        {intl.formatMessage({ id: 'newsletter-cta' })}
      </button>

      {showModal ? (
        <div
          id="modal"
          className={modalDiv}
          onClick={(event: any) => {
            if (event.target.id === 'modal') {
              setShowModal(!showModal);
            }
          }}
        >
          <div className={whiteContainer}>
            <div
              className={closeX}
              onClick={event => {
                event.stopPropagation();
                setShowModal(!showModal);
              }}
            >
              x
            </div>

            {formSubmitted ? (
              <div>
                <h2 className="text-center font-light">{intl.formatMessage({ id: 'newsletter-modal-two-title' })}</h2>
                <h5 className="text-center font-light mt-6">
                  {intl.formatMessage({ id: 'newsletter-modal-two-text' })}
                </h5>
                <hr className="border border-parityPink w-1/12 mx-auto" />
                <p className="text-center font-light">
                  {intl.formatMessage({ id: 'newsletter-modal-footer-text' })}{' '}
                  <a href="https://twitter.com/ParityTech" className="text-parityPink">
                    {intl.formatMessage({ id: 'newsletter-modal-footer-parity-handle' })}
                  </a>{' '}
                  {intl.formatMessage({ id: 'newsletter-modal-twitter' })}
                </p>
              </div>
            ) : null}

            {!formSubmitted ? (
              <div>
                <h4 className="text-center font-light px-4">
                  {intl.formatMessage({ id: 'newsletter-modal-one-title' })}
                </h4>
                <form onSubmit={event => handleSubmit(event)}>
                  <input type="hidden" name="u" value="1" />
                  <input type="hidden" name="f" value="1" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />

                  <input
                    className="w-72 mx-auto mt-4 border-textLight"
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                  />
                  <button
                    className="block mx-auto mt-4 bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-24 py-2 focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5"
                    type="submit"
                    value="Submit"
                    onSubmit={event => handleSubmit(event)}
                  >
                    {intl.formatMessage({ id: 'newsletter-cta' })}
                  </button>
                  <p className="text-xs text-textLight text-center mt-6">
                    {intl.formatMessage({ id: 'newsletter-modal-one-footer-text' })}{' '}
                    <a href="/privacy">{intl.formatMessage({ id: 'newsletter-modal-one-footer-privacy' })}</a>
                  </p>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsletterModal;
////////////---END-CONPONENT---///////////////
