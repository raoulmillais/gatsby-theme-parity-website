import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';

interface AuthorTemplateProps {
  data: any;
  pageContext: any;
}

export default function AuthorTemplate(props: AuthorTemplateProps) {
  const { pageContext, data } = props;

  console.log('>>> PAGE CONTEXT', pageContext);
  console.log('>>> DATA: ', data);

  return (
    <Layout>
      <SEO title="THIS IS TEMP" />
      This is an author page.
    </Layout>
  );
}
