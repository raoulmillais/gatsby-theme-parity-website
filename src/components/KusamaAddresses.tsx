import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

export default function KusamaAddresses() {
  const intl = useIntl();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal ? (document.body.style.overflow = `hidden`) : (document.body.style.overflow = `unset`);
  }, [showModal]);

  return (
    <>
      <span
        onClick={() => setShowModal(!showModal)}
        className="no-underline text-xs my-1 hover:underline mx-6 xl:ml-0 cursor-pointer text-textLight"
      >
        {intl.formatMessage({ id: 'nav-kusama-addresses' })}
      </span>
      {showModal ? (
        <div
          id="modal"
          className="overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-10 bg-opacity-80 h-full w-full bg-black text-textDark flex justify-center items-center"
          onClick={(event: any) => {
            if (event.target.id === 'modal') {
              setShowModal(!showModal);
            }
          }}
        >
          <div className="relative w-full mx-4 rounded-md bg-white flex flex-col justify-center items-center md:max-w-screen-sm">
            <div
              className="absolute top-0 right-0 pt-2 pr-3 opacity-40 hover:opacity-100 cursor-pointer"
              onClick={event => {
                event.stopPropagation();
                setShowModal(!showModal);
              }}
            >
              x
            </div>
            <div className="pt-6 pb-10">
              <h4 className="md:text-2xl px-4 mb-6 font-medium">{intl.formatMessage({ id: 'kusama-addresses' })}</h4>
              <div className="pl-4 mx-auto">
                <p className="uppercase font-title font-medium">
                  {intl.formatMessage({ id: 'kusama-addresses-parity-one' })}:
                </p>
                <code className="bg-pink-100 break-all">Fa1me4dit46AFSjinM89EsfiF7T91seEPU4wY9JNJQ752Sg</code>
                <p className="uppercase font-title font-medium mt-6">
                  {intl.formatMessage({ id: 'kusama-addresses-parity-two' })}:
                </p>
                <code className="bg-pink-100 break-all">F2i6trfXqFknbgB3d9wcd1X98WWdLLktmFtK8Beud75bjTW</code>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
