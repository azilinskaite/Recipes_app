import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({
  onSearch,
  inputRef,
  placeholder,
  inputValue,
  setInputValue,
}) => {
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when the component mounts
    }
  }, [inputRef]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value
  };

  // Rename to not be stuck to a click event
  const handleSearchEvent = () => {
    onSearch(inputValue);
  };
  return (
    <div className="search-bar">
      <label htmlFor="search-input" className="sr-only">
        Search for a cocktail
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="search-input"
        placeholder={placeholder}
        ref={inputRef}
        aria-label="Search for a cocktail"
        // For user experience add handleSearchEvent on Enter key press
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchEvent();
          }
        }}
      />
      <button className="search-button" onClick={handleSearchEvent}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
          aria-label="Search"
        />
      </button>
    </div>
  );
};

export default SearchBar;
