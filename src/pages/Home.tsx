import React, { useEffect, useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';
import Img from '../components/Img';
import matterhorn from '../images/matterhorn.png';

const Home = () => {
    const context = useContext(TitleContext);
    if (!context) {
        throw new Error('Home must be used within a TitleProvider');
    }
    const { setTitle, setSubtitle } = context;

    /* set page title and subtitle */
    useEffect(() => {
        setTitle('Jonah Kastelic');
        setSubtitle('Full Stack Developer & Software Engineer');
    }, [setTitle, setSubtitle]);

    return (
        <div>
            {/* main content */}
            <h1>Welcome</h1>
            <Img src={matterhorn} alt="matterhorn" height="533.6" width="300" className="idxImg" />
            <p> Jonah Kastelic - Current Senior at <a href="https://www.bu.edu/"> Boston University</a> scheduled to
                graduate January 2026 with BA in
                Computer Science from the College of Arts and Sciences. The purpose of this site is to showcase my resume,
                highlight my skills and experience, along with other pertinent information. A centralized platform for
                potential employers or collaborators to learn more about my background. </p>
            <h3> CS Experience Overview: </h3>
            <p> Language knowledge encompassing Python, Java, C++, JavaScript, Ocaml, SQL, GoLang, Rust. </p>
            <p> Framework knowledge encompassing React, Docker, MongoDB, Django, Flask, PyTorch, TensorFlow. </p>
            <p> Tool knowledge encompassing Git, AWS, Azure, Visual Studio. </p>
            <h3> Professional Goals: </h3>
            <p> Committed to continuous learning and impactful problem-solving. Looking to contribute to innovative
                processes which have a positive impact while growing as a dev and team member. </p>
            <h3> Hobbies: </h3>
            <p> Cryptography, Software Development, Machine Learning, Skiing, Fishing, Hiking, Cooking.</p>
        </div>
    );
};

export default Home;