import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import About from './components/pages/about.jsx';
import Projects from './components/Projects/projects.jsx';
import Contact from './components/pages/contact.jsx';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);