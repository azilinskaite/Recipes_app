import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import "./SearchHeaderComponent.css";
import SearchNavigation from "./SearchNavigation";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHeart } from "@fortawesome/free-regular-svg-icons";
import CocktailsList from "../Cocktail-list-component-AR/Cocktail-list";
//import './Cocktail-list-component-AR/Cocktail-list.css';

const SearchHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Fetch initial items when the component mounts
    const fetchInitialItems = async () => {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      const data = await response.json();
      setItems(data.drinks || []);
    };
    fetchInitialItems();
  }, []);
  console.log(items);

  const handleSearch = async (term) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);
  };

  const handleSearchByIngredient = async (ingredient) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);
  };

  const handleSearchByFirstLetter = async (letter) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);
  };

  const handleRandomDrink = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);
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

  const handleSearchByIngredientClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    // handleSearchByIngredient("Gin");
  };

  const handleSearchByFirstLetterClick = () => {
    handleSearchByFirstLetter("a");
  };

  const handleRandomDrinkClick = () => {
    handleRandomDrink();
  };

  return (
    <section className="search-header">
      <h1>Cocktail recipes</h1>
      <SearchNavigation
        onSearchByNameClick={handleSearchByNameClick}
        onSearchByIngredientClick={handleSearchByIngredientClick}
        onSearchByFirstLetter={handleSearchByFirstLetterClick}
        onRandomDrink={handleRandomDrinkClick}
      />
      <SearchBar onSearch={setSearchTerm} inputRef={searchInputRef} />
      {/* <CocktailsList items={searchResults.length > 0 ? searchResults : items} />  */}
      {/* <CocktailsList items={searchResults} /> */}
      {searchResults.length > 0 ? (
        <CocktailsList items={searchResults} />
      ) : (
        <CocktailsList items={items} />
      )}
    </section>
  );
};

export default SearchHeader;
