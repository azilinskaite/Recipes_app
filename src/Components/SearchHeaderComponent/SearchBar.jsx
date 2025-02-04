import React, { useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, inputRef, placeholder, inputValue, setInputValue}) => {
  // const [input, setInput] = useState('');
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };
  return (
    <div className="search-bar search-form">
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
