import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Img from '../components/Img';
import buSeal from '../images/Boston_University_seal.png';
import cascoBayLogo from '../images/casco-bay-logo.png';
import { CreditsWrapper } from './styled/StyledCredits';

const Credits = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Credits must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('Credits');
    }, [setTitle, setSubtitle]);

    return (
        <CreditsWrapper>
            {/* credits content */}
            <Img src={buSeal} alt="BU seal" width="100" height="100" />
            <a href="https://commons.wikimedia.org/wiki/File:Boston_University_seal.svg">Source</a>
            <Img src={cascoBayLogo} alt="CBHS logo" width="100" height="118.55" />
            <a href="https://cbhs.portlandschools.org/">Source</a>
        </CreditsWrapper>
    );
};

export default Credits;