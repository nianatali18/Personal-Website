
import './index.css';


import About from './components/pages/about.jsx';
// import Projects from './components/Projects/projects.jsx';
import Contact from './components/pages/contact.jsx';
import Nav from './components/Header/navbar.jsx';
import Footer from './components/Footer/footer.jsx';
import Home from './components/Home/home.jsx';

function App() {
  return (
    <div className='bg-black'>
      
      <Nav />
      <Home />
      <About />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;