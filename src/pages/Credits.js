import React from 'react';
import Layout from '../components/Layout';

const Credits = () => {
  return (
    <Layout title="Jonah Kastelic" subtitle="Credits">
      <main>
        <div className="creds">
          <img src="/Boston_University_seal.png" alt="BU seal" width="100" height="100" />
          <a href="https://commons.wikimedia.org/wiki/File:Boston_University_seal.svg">Source</a>
          <img src="/casco-bay-logo.png" alt="CBHS logo" width="100" height="118.55" />
          <a href="https://cbhs.portlandschools.org/">Source</a>
        </div>
      </main>
    </Layout>
  );
};

export default Credits;