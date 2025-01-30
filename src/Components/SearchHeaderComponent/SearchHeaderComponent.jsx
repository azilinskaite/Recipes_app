import React from "react";
import SearchBar from "./SearchBar";
import './SearchHeaderComponent.css';

const SearchHeader = () => {
  return (
    <section className="search-header">
      <h1>Cocktail recipes</h1>
      <nav className="search-navigation">
        <ul>
            {/* add Link to=" " before every li element*/}
          <li>Search by name</li>
          <li>Search by ingredient</li>
          <li>Search by first letter</li>
          <li>Get a random drink</li>
        </ul>
      </nav>
      <SearchBar/>
    </section>
  );
};

export default SearchHeader;