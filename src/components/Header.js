import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/main-pic.jpg';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="portfolio-hero">
      <div className="hero-content">
        <h1>Hey 👋, I am <br /><span>Prince Rockson</span></h1>
        <p className="hero-bio">
          Prince Rockson is a data analyst, data scientist, and web developer with a background in health informatics, AI, and machine learning, dedicated to turning complex data into meaningful insights and real-world solutions. 
        </p>
        <div className="hero-links">
          Email: <a href="mailto:parockson@gmail.com">parockson@gmail.com</a> | 
          LinkedIn: <a href="https://linkedin.com/in/parockson" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          GitHub: <a href="https://github.com/parockson" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <div className="hero-image-container">
        <div className="accent-shape"></div>
        <img src={logo} alt="Prince Rockson" className="hero-image" />
      </div>
    </header>
  );
};

export default Header;