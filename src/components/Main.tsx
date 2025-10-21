import React from 'react';
import { MainWrapper } from './styled/StyledMain';

interface MainProps {
    children: React.ReactNode;
}

/* main content wrapper component */
const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <MainWrapper>
            {children} {/* renders child components */}
        </MainWrapper>
    );
};

export default Main;