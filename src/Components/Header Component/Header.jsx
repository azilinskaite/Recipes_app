import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Cocktail Kungen" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/" end>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">My Favourites</NavLink>
          </li>
          <li>
            <Link to="/signout" className="nav-link">
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
