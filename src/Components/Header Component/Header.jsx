import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Cocktail Kungen" />
        </NavLink>
      </div>
      <nav>
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
            <NavLink to="/signout">Sign Out</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
