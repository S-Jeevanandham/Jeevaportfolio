import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Service from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contect/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

import { ThemeProvider } from './ThemeContext';
import Work from './components/work/Work';
import Certificate from './components/certificate/Certificate';


function App() {
  return (
    <ThemeProvider>
      <Header />
      
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Service /> */}
        <Qualification />
        <Work/>
        <Certificate/>
        
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </ThemeProvider>
  );
}

export default App;
