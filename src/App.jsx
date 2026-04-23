import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <span className="logo-text">Portofolio Nabila</span>
            </div>
            <ul className="nav-menu">
              <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
              <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
              <li><NavLink to="/certificates" className={({ isActive }) => isActive ? 'active' : ''}>Certificates</NavLink></li>
              <li><NavLink to="/social" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
            </main>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2026 Portofolio Nabila.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;