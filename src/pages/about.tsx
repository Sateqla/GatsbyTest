import * as React from 'react';
import Layout from '../components/layout';

const AboutPage: React.FC = () => {
  return (
    <Layout pageTitle="Tietoa minusta">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head: React.FC = () => <title>Tietoa minusta</title>;

export default AboutPage;
