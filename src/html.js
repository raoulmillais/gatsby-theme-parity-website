import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}

        {/* Global site tag (gtag.js) -- Google Analytics with Klaro Script */}
        <script
          data-type="application/javascript"
          data-src="https://www.googletagmanager.com/gtag/js?id=UA-145158313-1"
          data-name="googleAnalytics"
          type="opt-in"
        ></script>
        <script
          data-name="googleAnalytics"
          data-type="application/javascript"
          type="opt-in"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-145158313-1');
              });
        `,
          }}
        />
        {/* Twitter universal website tag code */}
        <script
          data-name="twitterAnalytics"
          data-type="application/javascript"
          type="opt-in"
          dangerouslySetInnerHTML={{
            __html: `
          !function(e,t,n,s,u,a)
          {e.twq ||
            ((s = e.twq = function () {
              s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            }),
            (s.version = '1.1'),
            (s.queue = []),
            (u = t.createElement(n)),
            (u.async = !0),
            (u.src = '//static.ads-twitter.com/uwt.js'),
            (a = t.getElementsByTagName(n)[0]),
            a.parentNode.insertBefore(u, a))}
          (window,document,'script');
          twq('init','o2pjb');
          twq('track','PageView');
        `,
          }}
        />
        {/* Cloudflare */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "http://schema.org",
            "@type": "Corporation",
          "name": "Parity Technologies Ltd.",
          "description": "Parity Technologies builds core blockchain infrastructure for the decentralised web.",
          "image": "https://www.parity.io/assets/img/logo-parity-image.png",
          "logo": "https://www.parity.io/assets/img/logo-parity.png",
          "url": "https://www.parity.io/",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "31 Great Titchfield St",
                "addressLocality": "London",
                "postalCode": "W1W 7PA",
                "addressCountry": "UK"
            },
            "sameAs": [
                "https://twitter.com/ParityTech",
                "https://www.facebook.com/ParityTech/",
                "https://www.instagram.com/paritytech/",
                "https://www.crunchbase.com/organization/ethcore",
                "https://www.linkedin.com/company/paritytech/",
                "https://medium.com/paritytech",
                "https://github.com/paritytech",
                "https://beta.companieshouse.gov.uk/company/09760015"
            ]
        }
      `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
