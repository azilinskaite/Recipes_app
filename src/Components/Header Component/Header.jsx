import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Cocktail Kungen" />
        </Link>
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
    </>
  );
};

export default Header;
