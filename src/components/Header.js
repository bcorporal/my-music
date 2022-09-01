import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo11.png";


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/home" onClick={closeMenu}>
             HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="/search" onClick={closeMenu}>
              SEARCH
            </a>
          </li>
          <li className="nav-item">
            <a href="/favorites" onClick={closeMenu}>
              FAVORITES
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;