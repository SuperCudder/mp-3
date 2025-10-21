import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { TitleContext } from '../contexts/TitleContext';

const Layout = () => {
  const { title, subtitle } = useContext(TitleContext);

  return (
    <div className="page-container">
      <Header title={title} subtitle={subtitle} />
      <div className="idxMain">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;