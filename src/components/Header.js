import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./images/logo11.png";


class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="navbar">
            <a href="/my-music" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <div className="nav-item">
              <Link to="/favorites">❤ FAVORITES</Link>
            </div>
          </div>
        </div>
      </header>
    );
}
}

export default Header;