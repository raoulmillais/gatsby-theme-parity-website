import React, { useState } from 'react'
import { LocalizedLink } from 'gatsby-theme-i18n'
import { useIntl } from "react-intl"

import parityLogo from '../../images/parity_logo_dark.png'

///////////////---STYLES---///////////////////
const navItemsDiv = "px-2 pt-2 pb-4 h-screen flex flex-col md:h-auto md:flex md:flex-row md:items-center md:mt-8"
const navItemStyles = "block mt-1 px-4 py-1 font-normal text-navItemColor  tracking-widest no-underline uppercase  hover:text-textLight text-center animate__animated animate__slideInRight animate__faster"
const socialIcons = "w-6 h-auto fill-current text-navItemColor hover:text-white mx-4"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Header = () => {

    const intl = useIntl()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="container md:flex md:justify-between md:px-4 md:py-4">

            <div className="flex items-center justify-between px-4 py-3 md:p-0">
                <div>
                    <LocalizedLink to="/">
                        <img className="h-14" src={parityLogo} alt="Sub0 Logo"/>
                    </LocalizedLink>
                </div>
                <div className="md:hidden">
                    <button type="button" className="block bg-white border-0" onClick={() => setIsOpen(!isOpen)}> 
                    <svg className="h-6 w-6 bg-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
                    </button>
                </div>
            </div>

            <div className={`${ isOpen ?  "block animate__animated animate__slideInRight animate__faster" : "hidden"} ${navItemsDiv}`} >
                <LocalizedLink to="/technologies" className={navItemStyles} >
                    {intl.formatMessage({ id: "nav-technologies" })}
                </LocalizedLink>
                <LocalizedLink to="/solutions" className={navItemStyles} >
                    {intl.formatMessage({id: "nav-solutions"})}
                </LocalizedLink>
                <LocalizedLink to="/about" className={navItemStyles} >
                    {intl.formatMessage({id: "nav-about"})}
                </LocalizedLink>
                <LocalizedLink to="/blog" className={navItemStyles} >
                    {intl.formatMessage({id: "nav-blog"})}
                </LocalizedLink>
                <div className="flex justify-center items-center px-2 py-1 my-4 md:my-0">
                    
                    <a 
                    href="https://twitter.com/substrate_io" 
                    >
                        <svg className ={socialIcons} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Twitter icon</title>
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                        </svg>
                    </a>
                    <a 
                    href="https://github.com/paritytech/substrate/releases" 
                    >
                        <svg className ={socialIcons} role="img" viewBox="0 0 43.2 42.2" xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub icon</title>
                        <path d="M43.2,21.6A21.6,21.6,0,1,0,14.6,42c.5-.4,1.1-.8,1.1-1.6V36.2a13,13,0,0,1-2.3.2,5,5,0,0,1-5-3.4A6,6,0,0,0,6,30.1c-.6-.3-.7-.8,0-.9,3-.6,3.8,3.4,5.8,4a5.88,5.88,0,0,0,4.2-.3,4.49,4.49,0,0,1,1.7-2.8c-5.1-.5-8.1-2.2-9.6-5l-.2-.3-.4-.9-.1-.3a14.87,14.87,0,0,1-.7-4.9,8.09,8.09,0,0,1,2.4-6.2,9.11,9.11,0,0,1,.4-6.3s2.2-.5,6.3,2.5c2.3-1,8.2-1,11.1-.2,1.7-1.2,4.9-2.8,6.2-2.3.3.6,1.1,2.2.5,5.8a9.69,9.69,0,0,1,2.7,7.2,15.32,15.32,0,0,1-.6,4.5l-.2.6-.2.6-.1.3c-1.5,3.3-4.6,4.5-9.6,5,1.6,1,2.1,2.3,2.1,5.7v4.7c0,.7.6,1.2,1.1,1.6A22,22,0,0,0,43.2,21.6"/></svg>
                    </a>
                </div>
                
            </div>

        </header>
    )
}

export default Header
////////////---END-CONPONENT---///////////////
