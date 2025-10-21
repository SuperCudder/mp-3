import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrapper } from './styled/StyledFooter';

/* footer component */
const Footer = () => {
  return (
    <FooterWrapper>
      <p><Link to="/credits">Credits</Link> &#169; 2025 Jonah Kastelic. All rights reserved. </p>
    </FooterWrapper>
  );
};

export default Footer;