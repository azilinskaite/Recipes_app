import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpeg";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Cocktail Kungen" />
        <h3>COCKTAIL KUNGEN</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/favorites">My Favourites</Link>
          </li>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
