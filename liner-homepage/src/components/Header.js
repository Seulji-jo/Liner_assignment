import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/home" className="liner-logo">
          liner-logo
        </Link>
        <form className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search on LINER"
          />
          <button className="search-submit">search</button>
        </form>
        <div className="btn-container">
          <button className="btn-upgrade">Upgrade</button>
          <button className="btn-notification icon">notification</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
