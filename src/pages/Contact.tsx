import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';

const Contact = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Contact must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('Contact');
    }, [setTitle, setSubtitle]);

    return (
        <div>
            {/* contact content */}
            <h3>Contact Information:</h3>
            <h2>Phone Number: +1 (207) 383-5314</h2>
            <h2>E-Mail: <a href="mailto:jonahkas@bu.edu">jonahkas@bu.edu</a></h2>
        </div>
    );
};

export default Contact;