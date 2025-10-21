import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';

const References = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('References must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('References');
    }, [setTitle, setSubtitle]);

    return (
        <div>
            {/* references content */}
            <h3>Professional</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Tyler Wilcox</td>
                    <td>American Airlines TPA Manager</td>
                    <td>+1 (207) 245-5045</td>
                </tr>
                <tr>
                    <td>Artemios Kayas</td>
                    <td>SPARK! Innovator (Technical)</td>
                    <td><a href="mailto:artemioskayas@gmail.com">artemioskayas@gmail.com</a></td>
                </tr>
                </tbody>
            </table>
            <h3>Personal</h3>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Samuel L. Jackson</td>
                    <td>Singer</td>
                    <td>+1 (323) 822-4852</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default References;