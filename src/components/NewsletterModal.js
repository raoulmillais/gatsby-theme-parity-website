import React, { useState } from 'react'

///////////////---STYLES---///////////////////
const modalDiv = "fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-black text-textDark flex justify-center items-center"
const whiteContainer= "relative w-full mx-4 rounded-md bg-white flex flex-col justify-center items-center"
const closeX = "absolute top-0 right-0 pt-2 pr-3 opacity-40 hover:opacity-100 hover:cursor-pointer"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const NewsletterModal = () => {
    
    
    const [showModal, setShowModal] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target)
        fetch('https://paritytechnologies.activehosted.com/proc.php', {
            method: 'POST',
            body: data, 
            mode: 'no-cors',
        })
        .then (response => {
            console.log("response from ActiveCampaign:", response)
            setFormSubmitted(!formSubmitted)
            setTimeout(() => {
                setFormSubmitted(!formSubmitted)
            }, 5000);
        })
        .catch( error => console.log("Request failed", error))
    }
    

    return (
        <> 
            <button 
                className="mt-6 bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-24 py-2 focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5"
                onClick={() => setShowModal(!showModal)}
            >
                Subscribe
            </button>

            {showModal 
                ?   <div 
                    className={modalDiv}
                    onClick={(event)=>{
                        event.preventDefault()
                        event.stopPropagation()
                        setShowModal(!showModal)
                    }}
                    >
                        { formSubmitted
                            ?   <div className={whiteContainer}>
                                    <div className={closeX}>x</div>
                                    <h2 className="text-center font-light">
                                        Almost finished...
                                    </h2> 
                                    <h5 className="text-center font-light mt-6">
                                        To complete the subscription process, please click the link in the email we just sent you.
                                    </h5>
                                    <hr className="border border-parityPink w-1/12"/>
                                    <p className="text-center font-light">
                                        For more news, follow <a href="https://twitter.com/ParityTech" className="text-parityPink">@ParityTech</a> on Twitter.
                                    </p>
                                </div>
                            :   null
                        }

                        { !formSubmitted 
                            ?   <div className={whiteContainer}>
                                    <div className={closeX}>x</div>
                                    <h4 className="text-center font-light ">
                                        Subscribe to hear about Parity Updates and events.
                                    </h4>
                                    <form onSubmit={(event) => handleSubmit(event)}>
                                        <input type="hidden" name="u" value="1" />
                                        <input type="hidden" name="f" value="1" />
                                        <input type="hidden" name="s" />
                                        <input type="hidden" name="c" value="0" />
                                        <input type="hidden" name="m" value="0" />
                                        <input type="hidden" name="act" value="sub" />
                                        <input type="hidden" name="v" value="2" />

                                        <input
                                            className="w-72 mx-auto mt-4 border-textLight"
                                            type="text"
                                            name="email"
                                            placeholder="Your Email Address"
                                            required
                                        />
                                        <button 
                                            className="block mx-auto mt-4 bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-24 py-2 focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5"
                                            type="submit"
                                            value="Submit"
                                            onSubmit={(event) => handleSubmit(event)}
                                        >
                                            Subscribe
                                        </button>
                                        <p className="text-xs text-textLight text-center mt-6">
                                            To see how we use your information please see our  <a to="/privacy-policy">privacy policy</a>
                                        </p>
                                    </form>
                                </div>
                                
                            :   null
                        }
                    </div>
                : null
            }

            
        </>
        

        // <div className="fixed top-0 bottom-0 h-full w-full bg-black text-textDark flex justify-center items-center">
        //     <div className="w-full mx-4 rounded-md bg-white flex flex-col items-center">
        //         <h3 className="text-center">
        //             Subscribe to hear about Parity Updates and events
        //         </h3>
        //         <form >
        //             <input 
        //             className="w-72 mt-4 border-textLight" 
        //             placeholder="Your Email Address" />
        //         </form>
        //         <button 
        //             className="mt-4 bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-24 py-2 focus:outline-none uppercase transition-transform transform hover:-translate-y-0.5"
                    
        //         >
        //             Subscribe
        //         </button>


        //     </div>
        // </div>
    )
}

export default NewsletterModal
////////////---END-CONPONENT---///////////////