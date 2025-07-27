import React from 'react';
import Menu from './components/TopMenu';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contacts from './components/Contacts';

/**
 * This is Teng Yi Ong's portfolio
 * @returns portfolio page
 */
function App() {
  return (
    <>
      <header>
        <Menu /> 
      </header>
      <main>
        <About /> 
        <Projects />
        <Skills />
        <Education />
      </main>
      <footer>
        <Contacts />
      </footer>
    </>
  );
};

export default App;