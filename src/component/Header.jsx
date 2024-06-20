import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ setSelectedPage }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" onClick={() => setSelectedPage('Home')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setSelectedPage('About')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={() => setSelectedPage('Dashboard')}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
