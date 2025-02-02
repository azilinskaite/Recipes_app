import React, { useState, useEffect, useRef} from "react";
import SearchBar from "./SearchBar";
import './SearchHeaderComponent.css';
import SearchNavigation from "./SearchNavigation";
// import CocktailsList from "../Cocktail-list-component-AR/Cocktail-list";
//import './Cocktail-list-component-AR/Cocktail-list.css'; 

const SearchHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const searchInputRef = useRef(null);

  const handleSearch = async (term) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`);
    const data = await response.json();
    setItems(data.drinks || []);
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  const handleSearchByNameClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  return (
    <>
    <section className="search-header">
      <h1>Cocktail recipes</h1>
      <SearchNavigation onSearchByNameClick={handleSearchByNameClick}/>
      <SearchBar onSearch={setSearchTerm} inputRef={searchInputRef}/>
      {/* <ul>
        {items.map(item => (
          <li key={item.idDrink}>{item.strDrink}</li>
        ))}
      </ul> */}
      {/* <div className="cocktail-list">
        {items.length > 0 ? (
          items.map((drink) => (
            <div key={drink.idDrink} className="cocktail-card">
              <h2>{drink.strDrink}</h2>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} width="150" />
              <p>{drink.strCategory}</p>
            </div>
          ))
        ) : (
          <p>No cocktails found. Try another name.</p>
        )}
      </div> */}
</section>
<div className="cocktail-list"> {}
      {items.map((drink) => (
        <div key={drink.idDrink} className="productCartContainer"> {}
          <h2>{drink.strDrink}</h2>
          <p>{drink.strCategory}</p>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default SearchHeader;