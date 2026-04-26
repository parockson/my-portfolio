import React from 'react';
import logo from '../assets/main-pic.jpg';

const Header = ({ theme, toggleTheme, colorTheme, setColorTheme }) => {
  const themes = [
    { id: 'theme-1', colors: ['#FF512F', '#DD2476'], name: 'Sunset' },
    { id: 'theme-2', colors: ['#2193b0', '#6dd5ed'], name: 'Ocean' },
    { id: 'theme-3', colors: ['#11998e', '#38ef7d'], name: 'Emerald' },
    { id: 'theme-4', colors: ['#8e2de2', '#4a00e0'], name: 'Royal' },
    { id: 'theme-5', colors: ['#f2994a', '#f2c94c'], name: 'Golden' },
    { id: 'theme-6', colors: ['#654ea3', '#eaafc8'], name: 'Cosmic' },
  ];

  return (
    <header className="portfolio-hero">
      <div className="hero-content">
        <h1>Hey 👋, I am <br /><span className="gradient-text">Prince Rockson</span></h1>
        <p className="hero-bio">
          Prince Rockson is a data analyst, data scientist, and web developer with a background in health informatics, AI, and machine learning, dedicated to turning complex data into meaningful insights and real-world solutions. 
        </p>
        
        <div className="theme-selection">
          <p>Choose Theme:</p>
          <div className="theme-buttons">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`theme-btn ${colorTheme === t.id ? 'active' : ''}`}
                style={{ background: `linear-gradient(135deg, ${t.colors[0]}, ${t.colors[1]})` }}
                onClick={() => setColorTheme(t.id)}
                title={t.name}
              />
            ))}
          </div>
        </div>

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