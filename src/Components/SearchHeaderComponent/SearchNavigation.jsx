import React from "react";
import "./SearchHeaderComponent.css";

const SearchNavigation = ({ onSearchByNameClick }) => {
  return (
    <nav className="search-navigation">
      <ul>
         {/*ADD TO EVERY COMPONENT <NavLink to="state-component"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }>State Component </NavLink>*/}
          <li onClick={onSearchByNameClick}>Search by name</li>
          <li>Search by ingredient</li>
          <li>Search by first letter</li>
          <li>Get a random drink</li>
        </ul>
     
    </nav>
  );
};

export default SearchNavigation;
