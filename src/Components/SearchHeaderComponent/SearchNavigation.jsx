import React from "react";
import './SearchHeaderComponent.css';

const SearchNavigation = ({ onNavClick }) => {
    return (
        <nav className="search-navigation">
          <ul>
            <li onClick={() => onNavClick('byName')}>Search by name</li>
            <li onClick={() => onNavClick('byIngredient')}>Search by ingredient</li>
            <li onClick={() => onNavClick('byFirstLetter')}>Search by first letter</li>
            <li onClick={() => onNavClick('byRandom')}>Get a random drink</li>
          </ul>
        </nav>
      );
};

export default SearchNavigation;