import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/references">References</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><a href="https://github.com/SuperCudder" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </nav>
  );
};

export default Nav;