import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/main-pic.jpg';

const Header = ({ onLogin, isLoggedIn }) => {
  return (
    <header className="portfolio-header">
      <img src={logo} alt="Parockson portfolio logo " />
      <h1>Alex Johnson</h1>
      <p>Data Analyst & Business Intelligence Specialist</p>
      <p>
        Email: <a href="mailto:alex.johnson@email.com">alex.johnson@email.com</a> | 
        LinkedIn: <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexjohnson</a> | 
        Website: <a href="https://alexjohnsonportfolio.com" target="_blank" rel="noopener noreferrer">alexjohnsonportfolio.com</a>
      </p>
      <button onClick={onLogin} className="login-btn">Admin Login</button>
      {isLoggedIn && <Link to="/admin" className="admin-link">Go to Admin</Link>}
    </header>
  );
};

export default Header;