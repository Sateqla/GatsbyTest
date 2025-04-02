import * as React from 'react';
import { Link } from 'gatsby';

const AboutPage: React.FC = () => {
  return (
    <main>
      <h1>Tietoa minusta</h1>
      <Link to="/">Takaisin etusivulle</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};

export const Head: React.FC = () => <title>Tietoa minusta</title>;

export default AboutPage;
