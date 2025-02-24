import React from "react";
import "./DynamicHeader.css";

const SearchNavigation = ({
  onSearchByNameClick,
  onSearchByIngredientClick,
  onRandomDrink,
  activeItem,
  setActiveItem,
}) => {
  const isActiveItem = (item) => {
    switch (item) {
      case "name":
        return activeItem === "name";
      case "ingredient":
        return activeItem === "ingredient";
      case "random":
        return activeItem === "random";
      default:
        return false;
    }
  };

  return (
    <nav className="search-navigation" aria-label="Search Navigation">
      <ul>
        <li
          className={isActiveItem("name") ? "active" : " "}
          onClick={() => {
            setActiveItem("name");
            onSearchByNameClick();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={isActiveItem("name")}
          aria-label="Search by name"
        >
          Search by name
        </li>
        <li
          className={isActiveItem("ingredient") ? "active" : " "}
          onClick={() => {
            setActiveItem("ingredient");
            onSearchByIngredientClick();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={isActiveItem("ingredient")}
          aria-label="Search by ingredient"
        >
          Search by ingredient
        </li>
        <li
          className={isActiveItem("random") ? "active" : " "}
          onClick={() => {
            setActiveItem("random");
            onRandomDrink();
          }}
          role="button"
          tabIndex="0"
          aria-pressed={isActiveItem("random")}
          aria-label="Get a random drink"
        >
          Get a random drink
        </li>
      </ul>
    </nav>
  );
};

export default SearchNavigation;
