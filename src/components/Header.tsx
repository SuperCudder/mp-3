import React, { useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import { HeaderWrapper } from './styled/StyledHeader';

/* header component */
const Header = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Header must be used within a TitleProvider');
    }
    const { title, subtitle } = context;

    return (
        <HeaderWrapper>
            <h1>{title}</h1> {/* main title */}
            <p>{subtitle}</p> {/* subtitle */}
        </HeaderWrapper>
    );
};

export default Header;