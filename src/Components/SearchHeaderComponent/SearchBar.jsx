import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <form className="search-form">
      <input
        type="search"
        className="search-input"
        placeholder="Know what you want? Search it!"
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
