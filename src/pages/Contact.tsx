import React, { useContext, useEffect } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Main from '../components/Main';

const Contact = () => {
  const { setTitle, setSubtitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Jonah Kastelic');
    setSubtitle('Contact');
  }, [setTitle, setSubtitle]);

  return (
    <Main>
      <h3>Contact Information:</h3>
      <h2>Phone Number: +1 (207) 383-5314</h2>
      <h2>E-Mail: <a href="mailto:jonahkas@bu.edu">jonahkas@bu.edu</a></h2>
    </Main>
  );
};

export default Contact;