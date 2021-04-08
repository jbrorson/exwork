import React from 'react';
import avatar from '../images/avatar.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="Profile avatar" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work" exact activeClassName="active">
              Latest Work
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>
            @2021 Made by Jbrorson
          </p>
        </footer>
      </nav>
    </div>
  )
}

export default Navbar
