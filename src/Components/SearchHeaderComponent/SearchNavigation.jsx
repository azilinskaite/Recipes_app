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
    <nav className="search-navigation" aria-label="Search Navigation">
      <ul>
        <li
          className={activeItem === "name" ? "active" : " "}
          onClick={() => {
            setActiveItem("name");
            onSearchByNameClick();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={activeItem === "name"}
          aria-label="Search by name"
        >
          Search by name
        </li>
        <li
          className={activeItem === "ingredient" ? "active" : " "}
          onClick={() => {
            setActiveItem("ingredient");
            onSearchByIngredientClick();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={activeItem === "ingredient"}
          aria-label="Search by ingredient"
        >
          Search by ingredient
        </li>
        <li
          className={activeItem === "firstLetter" ? "active" : " "}
          onClick={() => {
            setActiveItem("firstLetter");
            onSearchByFirstLetter();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={activeItem === "firstLetter"}
          aria-label="Search by first letter"
        >
          Search by first letter
        </li>
        <li
          className={activeItem === "random" ? "active" : " "}
          onClick={() => {
            setActiveItem("random");
            onRandomDrink();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={activeItem === "random"}
          aria-label="Get a random drink"
        >
          Get a random drink
        </li>
      </ul>
    </nav>
  );
};

export default SearchNavigation;
