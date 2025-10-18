import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children, title, subtitle }) => {
  return (
    <div className="page-container">
      <Header title={title} subtitle={subtitle} />
      <div className="idxMain">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;