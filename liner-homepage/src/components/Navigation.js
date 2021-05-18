import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-container">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">
            For You
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/myhighlights/highlights" activeClassName="active">
            My Highlights
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/more" activeClassName="active">
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
