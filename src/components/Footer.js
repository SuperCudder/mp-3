import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p><Link to="/credits">Credits</Link> &#169; 2025 Jonah Kastelic. All rights reserved. </p>
    </footer>
  );
};

export default Footer;