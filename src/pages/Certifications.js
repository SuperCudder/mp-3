import React from 'react';
import Layout from '../components/Layout';

const Certifications = () => {
  return (
    <Layout title="Jonah Kastelic" subtitle="Certifications">
      <main>
        <h3>Certification Examples: </h3>
        <h2>Certified ScrumMaster (CSM)</h2>
        <p>Agile servant-leader training, obstacle removal and effective production - <a href="https://radio.garden">Transmission</a></p>
        <h2>AWS Certified Solutions Architect - Associate (Cloud)</h2>
        <p>Successfully completed AWS training certification 2023 - <a href="https://theuselessweb.com/">Diploma</a></p>
        <h2>Certified Information Systems Security Professional (CISSP)</h2>
        <p>Cybersecurity network admin gold standard: <a href="https://samplette.io/">Record</a></p>
        <h2>Microsoft Certified: Azure Fundamentals / Solutions Architect (Cloud + Enterprise)</h2>
        <p>DevOps enterprise software engineering on widely used Azure Enterprise environment: <a
          href="https://pointerpointer.com/">Focus</a></p>
        <h2>Certified Kubernetes Administrator (CKA)</h2>
        <p>Container orchestration, highly valued in DevOps - <a href="https://worldle.teuteuf.fr/">Atlas</a></p>
      </main>
    </Layout>
  );
};

export default Certifications;