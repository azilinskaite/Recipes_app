import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, inputRef}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(input);
  };
  return (
    <div className="search-bar search-form">
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      className="search-input"
      placeholder="Search for a cocktail..."
      ref={inputRef}
    />
    <button className="search-button" onClick={handleSearchClick}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="search-icon"
      />
    </button>
  </div>
//   <form className="search-form">
//   <input
//     type="text"
//     value={input}
//     onChange={handleInputChange}
//     className="search-input"
//     placeholder="Know what you want? Search it!"
//   />
//   <button className="search-button" onClick={handleSearchClick}>
//     <FontAwesomeIcon
//       icon={faMagnifyingGlass}
//       className="search-icon"
//     />
//   </button>
// </form>
  );
};

export default SearchBar;
