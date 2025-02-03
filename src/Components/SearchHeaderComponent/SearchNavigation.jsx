import React from "react";
import "./SearchHeaderComponent.css";

const SearchNavigation = ({ onSearchByNameClick, onSearchByIngredientClick, onSearchByFirstLetter, onRandomDrink }) => {
  return (
    <nav className="search-navigation">
      <ul>
         {/*ADD TO EVERY COMPONENT <NavLink to="state-component"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }>State Component </NavLink>*/}
          <li onClick={onSearchByNameClick}>Search by name</li>
          <li onClick={onSearchByIngredientClick}>Search by ingredient</li>
          <li onClick={onSearchByFirstLetter}>Search by first letter</li>
          <li onClick={onRandomDrink}>Get a random drink</li>
        </ul>
     
    </nav>
  );
};

export default SearchNavigation;
