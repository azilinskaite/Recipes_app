import React, { useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, inputRef, placeholder, inputValue, setInputValue}) => {
 
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when the component mounts
    }
  }, [inputRef]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };
  return (
    <div className="search-bar">
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      className="search-input"
      placeholder= {placeholder}
      ref={inputRef}
    />
    <button className="search-button" onClick={handleSearchClick}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="search-icon"
      />
    </button>
  </div>
  );
};

export default SearchBar;
