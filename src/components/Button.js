import React from 'react'

///////////////---STYLES---///////////////////
const buttonStyles = "bg-parityPink font-border text-sm text-white opacity-90 font-normal tracking-widest  px-12 py-2 focus:outline-none uppercase"
const hoverStyles = "transition-transform transform hover:-translate-y-0.5"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Button = ({children, link, extraClass}) => {
    
    return (
        <a
            href={link}
        >
            <button 
            type="buton"
            className={`${buttonStyles} ${hoverStyles} ${extraClass}`}>
                {children}
            </button>
        </a>
    )
}

export default Button
////////////---END-CONPONENT---///////////////