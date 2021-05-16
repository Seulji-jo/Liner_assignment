import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav className="nav">
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/" className={pathname === '/' ? 'active' : null}>
            For You
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/myhighlights"
            className={pathname === '/myhighlights' ? 'active' : null}
          >
            My Highlights
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/more" className={pathname === '/more' ? 'active' : null}>
            More
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
