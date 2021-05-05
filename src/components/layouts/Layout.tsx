import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLink } from 'gatsby-theme-i18n';

import Header from './Header';
import HeaderLight from './HeaderLight';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';
import Banner from '../Banner';

interface LayoutProps {
  children: React.ReactNode;
  theme?: string;
}

const components = {
  a: MdxLink,
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Banner />
      {props.theme === 'light' ? <HeaderLight /> : <Header />}
      <main className="">
        <ScrollToTop />
        <MDXProvider components={components}>{props.children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
}
