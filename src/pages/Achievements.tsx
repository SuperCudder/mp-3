import React, { useContext, useEffect } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Main from '../components/Main';

const Achievements = () => {
  const { setTitle, setSubtitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Jonah Kastelic');
    setSubtitle('Achievements');
  }, [setTitle, setSubtitle]);

  return (
    <Main>
      <h2>Global Elite - Counter Strike 2</h2>
      <h2> Relevant Coursework: </h2>
      <ul>
        <li>CS 351: Distributed Systems</li>
        <li>CS 440: Artificial Intelligence</li>
        <li>CS 461: Databases</li>
        <li>CS 460: Databases</li>
        <li>CS 330: Analysis of Algorithms</li>
        <li>CS 411: Software Engineering</li>
        <li>CS 320: Concepts in Programming Languages</li>
        <li>CS 285: Data Structures</li>
        <li>MA 193: Discrete Mathematics</li>
      </ul>
    </Main>
  );
};

export default Achievements;