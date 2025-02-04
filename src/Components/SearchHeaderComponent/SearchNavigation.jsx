import React from "react";
import "./DynamicHeader.css";

const SearchNavigation = ({
  onSearchByNameClick,
  onSearchByIngredientClick,
  onSearchByFirstLetter,
  onRandomDrink,
  activeItem,
  setActiveItem,
}) => {
  return (
   
    <nav className="search-navigation">
      <ul>
  
        <li
          className={activeItem === "name" ? "active" : " "}
          onClick={() => {
            setActiveItem("name");
            onSearchByNameClick();
          }}
        >
          Search by name
        </li>
        <li
          className={activeItem === "ingredient" ? "active" : " "}
          onClick={() => {
            setActiveItem("ingredient");
            onSearchByIngredientClick();
          }}
        >
          Search by ingredient
        </li>
        <li
          className={activeItem === "firstLetter" ? "active" : " "}
          onClick={() => {
            setActiveItem("firstLetter");
            onSearchByFirstLetter();
          }}
        >
          Search by first letter
        </li>
        <li
          className={activeItem === "random" ? "active" : " "}
          onClick={() => {
            setActiveItem("random");
            onRandomDrink();
          }}
        >
          Get a random drink
        </li>
      </ul>
    </nav>
  );
};

export default SearchNavigation;

