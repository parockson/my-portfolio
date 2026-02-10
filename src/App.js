import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Purpose from './components/Purpose';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Admin from './components/Admin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const password = prompt('Enter admin password:');
    if (password === 'admin') {  // Change this password!
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <Router>
      <div className="App">
        <Header onLogin={handleLogin} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={
            <div className="container">
              <Introduction />
              <Purpose />
              <Projects />
              <Gallery />
              <Skills />
              <Achievements />
              <Resume />
              <Testimonials />
              <Contact />
            </div>
          } />
          {isLoggedIn && <Route path="/admin" element={<Admin />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;