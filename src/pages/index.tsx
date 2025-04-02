import * as React from 'react';
import Layout from '../components/layout';

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Etusivu">
      <p>
        I'm making this by following the Gatsby Tutorial. Except this is in
        TypeScript instead of JavaScript.
      </p>
    </Layout>
  );
};

export const Head: React.FC = () => <title>Home Page</title>;

export default IndexPage;
