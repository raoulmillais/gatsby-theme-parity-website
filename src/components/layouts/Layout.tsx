import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MdxLink } from 'gatsby-theme-i18n';

import Header from './Header';
import HeaderLight from './HeaderLight';
import Footer from './Footer';
import CookieBox from '../CookieBox';
import { useLocalStorage } from '../../utils/hooks';
import { initGA, logPageView } from '../../utils/analytics';

interface LayoutProps {
  children: React.ReactNode;
  theme?: string;
}

const components = {
  a: MdxLink,
};

export default function Layout(props: LayoutProps) {
  const [localStorageData, setLocalStorageData] = useLocalStorage('parityCookies', {
    cookiesBoxClicked: false,
    analytics: false,
  });

  useEffect(() => {
    if (localStorageData.analytics) {
      initGA();
      logPageView();
    }
  }, [localStorageData.analytics]);

  return (
    <>
      {props.theme === 'light' ? <HeaderLight /> : <Header />}
      <main className="">
        <MDXProvider components={components}>{props.children}</MDXProvider>
        {!localStorageData.cookiesBoxClicked && <CookieBox setLocalStorageData={setLocalStorageData} />}
      </main>
      <Footer />
    </>
  );
}
