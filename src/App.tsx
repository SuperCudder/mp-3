import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home.tsx';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import References from './pages/References';
import Credits from './pages/Credits';
import { TitleProvider } from './contexts/TitleContext';
import GlobalStyle from './styles/GlobalStyle.js';

/* router setup */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="education" element={<Education />} />
      <Route path="certifications" element={<Certifications />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="projects" element={<Projects />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
      <Route path="references" element={<References />} />
      <Route path="credits" element={<Credits />} />
    </Route>
  )
);

/* main app component */
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TitleProvider>
        <RouterProvider router={router} />
      </TitleProvider>
    </div>
  );
}

export default App;