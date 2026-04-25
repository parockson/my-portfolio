import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Purpose from './components/Purpose';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme + '-mode';
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}-mode`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <div className="container">
              <Purpose />
              <Education />
              <Projects />
              <Skills />
              <Achievements />
              <Resume />
              <Contact />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;