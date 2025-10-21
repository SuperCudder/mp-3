import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Img from '../components/Img';
import cascoBayLogo from '../images/casco-bay-logo.png';
import buSeal from '../images/Boston_University_seal.png';

const Education = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Education must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('Education');
    }, [setTitle, setSubtitle]);

    return (
        <div className="eduMain">
            {/* education content */}
            <Img src={cascoBayLogo} alt="CBHS logo" width="200" height="237" />
            <h2><a href="https://cbhs.portlandschools.org/">Casco Bay High School</a> - Graduated Cum Laude</h2>
            <h3>Achievements:</h3>
            <p> Ci2 Lab Internship: VR project development in Unreal Engine and C++</p>
            <p> Maine Model United Nations Conference </p>
            <p> Mathematics, English, Science tutoring</p>
            <Img src={buSeal} alt="BU seal" width="200" height="200" />
            <h2><a href="https://www.bu.edu/"> Boston University</a> - BA in Computer Science</h2>
            <h3>Achievements:</h3>
            <p> Crazy High GPA</p>
            <p> Crazy Hackathons</p>
            <p> SPARK! Innovation Fellowship Program</p>
            <p> Sydney, Australia Study Abroad Program</p>
        </div>
    );
};

export default Education;