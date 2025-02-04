import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import SearchNavigation from "./SearchNavigation";
import CocktailsList from "../Cocktail-list-component-AR/Cocktail-list";
//import './Cocktail-list-component-AR/Cocktail-list.css';
import Loader from "../LoaderComponent/Loader";  // Import Loader
import "./DynamicHeader.css";

const DynamicHeader = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);

  // Fetch the initial items when the component mounts
  useEffect(() => {
    const fetchInitialItems = async () => {
      setLoading(true); // Show loader
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      );
      const data = await response.json();
      setItems(data.drinks || []);

      // Wait for 5 seconds and then hide the loader
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    fetchInitialItems();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = async (term) => {
    setLoading(true); // Show loader
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);

    // Wait for 5 seconds and then hide the loader
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleSearchByIngredient = async (ingredient) => {
    setLoading(true); // Show loader
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);

    // Wait for 5 seconds and then hide the loader
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleSearchByFirstLetter = async (letter) => {
    setLoading(true); // Show loader
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);

    // Wait for 5 seconds and then hide the loader
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleRandomDrink = async () => {
    setLoading(true); // Show loader
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    setSearchResults(data.drinks || []);

    // Wait for 5 seconds and then hide the loader
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const handleSearchByNameClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchByIngredientClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchByFirstLetterClick = () => {
    handleSearchByFirstLetter("a");
  };

  const handleRandomDrinkClick = () => {
    handleRandomDrink();
  };

  return (
    <section className="search-header">
      <h1>{type === "favorites" ? "Favourite recipes" : "Cocktail recipes"}</h1>
      {type !== "favorites" && (
        <>
          <SearchNavigation
            onSearchByNameClick={handleSearchByNameClick}
            onSearchByIngredientClick={handleSearchByIngredientClick}
            onSearchByFirstLetter={handleSearchByFirstLetterClick}
            onRandomDrink={handleRandomDrinkClick}
          />
          <SearchBar onSearch={setSearchTerm} inputRef={searchInputRef} />
  
          {/* Show loader when loading is true */}
          {loading ? (
            <Loader />
          ) : searchResults.length > 0 ? (
            <CocktailsList items={searchResults} />
          ) : (
            <CocktailsList items={items} />
          )}
        </>
      )}
    </section>
  );

  export default DynamicHeader;