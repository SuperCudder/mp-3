import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

/* main layout component */
const Layout = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="idxMain">
                <Nav />
                <Main>
                    <Outlet /> {/* nested routes will be rendered here */}
                </Main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;