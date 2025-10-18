import React from 'react';
import Layout from '../components/Layout';

const Education = () => {
  return (
    <Layout title="Jonah Kastelic" subtitle="Education">
      <main>
        <div className="eduMain">
          <img src="/casco-bay-logo.png" alt="CBHS logo" width="200" height="237" />
          <h2><a href="https://cbhs.portlandschools.org/">Casco Bay High School</a> - Graduated Cum Laude</h2>
          <h3>Achievements:</h3>
          <p> Ci2 Lab Internship: VR project development in Unreal Engine and C++</p>
          <p> Maine Model United Nations Conference </p>
          <p> Mathematics, English, Science tutoring</p>
          <img src="/Boston_University_seal.png" alt="BU seal" width="200" height="200" />
          <h2><a href="https://www.bu.edu/"> Boston University</a> - BA in Computer Science</h2>
          <h3>Achievements:</h3>
          <p> Crazy High GPA</p>
          <p> Crazy Hackathons</p>
          <p> SPARK! Innovation Fellowship Program</p>
          <p> Sydney, Australia Study Abroad Program</p>
        </div>
      </main>
    </Layout>
  );
};

export default Education;