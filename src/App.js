
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import About from './components/about.js';
import AOS from 'aos';

const App = () => {

  useEffect(() => {

    setTimeout(() => {

      AOS.init();

    }, 1000);

  }, []);

  return (
    <div className='scroll'>

      <Hero />
      <About />
      <Navbar />
      
    </div>
    

  )
}

export default App;