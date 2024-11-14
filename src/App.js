// src/App.js
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import ScrollToTopButton from './components/scrolltoTop.js';
import Ovals from './components/Ovals'; // Import the Ovals component
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, []); // Run once on mount

  return (
    <div className='scroll'>
      <Ovals /> {/* Render the Ovals component */}
      <Navbar />
      <Hero />
      <About />
      <ScrollToTopButton />
    </div>
  );
}

export default App;