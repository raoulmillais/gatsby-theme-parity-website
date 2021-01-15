import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLink } from 'gatsby-theme-i18n';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const components = {
  a: MdxLink,
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <MDXProvider components={components}>{props.children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
}
