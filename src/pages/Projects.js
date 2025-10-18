import React from 'react';
import Layout from '../components/Layout';
import Calculator from '../components/Calculator';

const Projects = () => {
  return (
    <Layout title="Jonah Kastelic" subtitle="Projects">
      <main>
        <h2>Ongoing Projects:</h2>
        <h3>XC475 Spark! Fellowship Program - Linguaplay</h3>
        <p>Linguaplay is an interacive alternative language learning application where users play custom lessons by
          uploading PDF language content. That content is then used to populate a number of experiences
          designed to hold attention. Gamification of linguistics developed by a team of 5, cross college
          students. </p>
        <h3>ASL Hand Recognition Web Application for IFusion - <a
          href="https://github.com/meta61/Sign_Language_Recognition"> GitHub </a></h3>
        <p> A web hosted python application which recognizes American Sign Language (ASL) hand gestures based on hand
          landmark points. It uses machine learning to predict the corresponding ASL sign language gesture based on
          real-time input from the webcam.</p>

        <h2>JavaScript Calculator</h2>
        <Calculator />
      </main>
    </Layout>
  );
};

export default Projects;