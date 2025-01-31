import React from "react";
import SearchBar from "./SearchBar";
import './SearchHeaderComponent.css';
import SearchNavigation from "./SearchNavigation";

const SearchHeader = ({ onNavClick, setName, setIngredient, setFirstLetter }) => {
  return (
    <section className="search-header">
      <h1>Cocktail recipes</h1>
      <SearchNavigation onNavClick={onNavClick} />
      <SearchBar 
        setName={setName}
        setIngredient={setIngredient}
        setFirstLetter={setFirstLetter}
      />
    </section>
  );
};

export default SearchHeader;