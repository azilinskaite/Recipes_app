import React from "react";
import SearchBar from "./SearchBar";
import './SearchHeaderComponent.css';
import SearchNavigation from "./SearchNavigation";

const SearchHeader = () => {
  return (
    <section className="search-header">
      <h1>Cocktail recipes</h1>
      <SearchNavigation/>
      <SearchBar/>
    </section>
  );
};

export default SearchHeader;