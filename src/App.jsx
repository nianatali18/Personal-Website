
import './index.css';

import React from 'react';
import About from './components/pages/about.jsx';
import Projects from './components/Projects/projects.jsx';
import Contact from './components/pages/contact.jsx';
import Nav from './components/Header/navbar.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <div className='bg-black'>
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;