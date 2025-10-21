import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';

const Achievements = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Achievements must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('Achievements');
    }, [setTitle, setSubtitle]);

    return (
        <div>
            {/* achievements content */}
            <h2>Global Elite - Counter Strike 2</h2>
            <h2> Relevant Coursework: </h2>
            <ul>
                <li>CS 351: Distributed Systems</li>
                <li>CS 440: Artificial Intelligence</li>
                <li>CS 461: Databases</li>
                <li>CS 460: Databases</li>
                <li>CS 330: Analysis of Algorithms</li>
                <li>CS 411: Software Engineering</li>
                <li>CS 320: Concepts in Programming Languages</li>
                <li>CS 285: Data Structures</li>
                <li>MA 193: Discrete Mathematics</li>
            </ul>
        </div>
    );
};

export default Achievements;