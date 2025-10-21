import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Img from '../components/Img';
import aaLogo from '../images/aa-logo-cropped.png';

const Experience = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Experience must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('Experience');
    }, [setTitle, setSubtitle]);

    return (
        <div>
            {/* experience content */}
            <h1>Previous Employment:</h1>
            <Img src={aaLogo} alt="American Airlines Logo" width="330" height="86" />
            <h2>Ramp Agent | April 2022-January 2024 </h2>
            <p>Previously employed as a ramp agent and crew chief at PWM marshalling flights to gates. coordinated with
                ground and flight crews to ensure safe and efficient aircraft loading/unloading. Tracked schedules and
                verified freight documentation to maintain operational accuracy. Trained new hires and operated specialized
                equipment while adhering to strict safety standards. </p>
        </div>
    );
};

export default Experience;