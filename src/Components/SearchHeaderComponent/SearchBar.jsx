import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setName, setIngredient, setFirstLetter }) => {
    const [searchInput, setSearchInput] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setName(searchInput);
    };
  
    const handleInputChange = (e) => {
      setSearchInput(e.target.value);
      setName(e.target.value);
    };

// Add setIngredient and setFirstLetter
  
    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Know what you want? Search it!"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon"
          />
        </button>
      </form>
    );
  };

export default SearchBar;
