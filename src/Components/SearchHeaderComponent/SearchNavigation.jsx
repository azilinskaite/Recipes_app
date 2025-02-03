import React, { useState } from "react";
import "./DynamicHeader.css";

const SearchNavigation = ({ onSearchByNameClick, onSearchByIngredientClick, onSearchByFirstLetter, onRandomDrink }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index, callback) => {
    setActiveItem(index);
    callback();
  };

  return (
    <nav className="search-navigation">
      <ul>
        <li 
          className={activeItem === 0 ? "active-link" : "inactive-link"}
          onClick={() => handleItemClick(0, onSearchByNameClick)}
        >
          Search by name
        </li>
        <li 
          className={activeItem === 1 ? "active-link" : "inactive-link"}
          onClick={() => handleItemClick(1, onSearchByIngredientClick)}
        >
          Search by ingredient
        </li>
        <li 
          className={activeItem === 2 ? "active-link" : "inactive-link"}
          onClick={() => handleItemClick(2, onSearchByFirstLetter)}
        >
          Search by first letter
        </li>
        <li 
          className={activeItem === 3 ? "active-link" : "inactive-link"}
          onClick={() => handleItemClick(3, onRandomDrink)}
        >
          Get a random drink
        </li>
      </ul>
    </nav>
  );
};

export default SearchNavigation;
