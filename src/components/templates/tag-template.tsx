import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../layouts/SEO';

interface TagTemplateProps {
  data: any;
  pageContext: any;
}

export default function TagTemplate(props: TagTemplateProps) {
  const { pageContext, data } = props;

  console.log('>>> PAGE CONTEXT', pageContext);
  console.log('>>> DATA: ', data);

  return (
    <Layout>
      <SEO title="THIS IS TEMP" />
      This is a tag page.
    </Layout>
  );
}
