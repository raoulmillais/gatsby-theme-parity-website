import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MdxLink, LocalizedLink } from "gatsby-theme-i18n"
import { useIntl } from 'react-intl'

import Header from './Header'
import Footer from './Footer'

const components = {
  a: MdxLink,
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer />
    </>
  )
}

export default Layout
