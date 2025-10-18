import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import References from './pages/References';
import Certifications from './pages/Certifications';
import Credits from './pages/Credits';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/references" element={<References />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;