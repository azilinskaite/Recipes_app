import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import SearchNavigation from "./SearchNavigation";
import CocktailsList from "../Cocktail-list-component-AR/Cocktail-list";
import Loader from "../LoaderComponent/Loader";  // Import Loader
import "./DynamicHeader.css";

const DynamicHeader = ({ type, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [placeholder, setPlaceholder] = useState("Search for a cocktail...");
  const [inputValue, setInputValue] = useState("");
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

  // Function to handle search by name
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

  // Function to handle search by ingredient
  const handleSearchByIngredient = async (ingredient) => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setPlaceholder("For example: gin");
    setActiveItem("ingredient");
    setInputValue("");

    // Perform the search if there's an input value
    if (ingredient) {
      setLoading(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setSearchResults(data.drinks || []);
      setLoading(false);
    }
  };

  // Function to handle search by first letter
  const handleSearchByFirstLetter = async (letter) => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setPlaceholder("For example: a");
    setActiveItem("firstLetter");
    setInputValue("");

    // Perform the search if there's an input value
    if (letter && letter.length === 1) {
      setLoading(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const data = await response.json();
      setSearchResults(data.drinks || []);
      setLoading(false);
    }
  };

  // Function to handle random drink
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

  // Functions to handle all search navigation clicks
  const handleSearchByNameClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setPlaceholder("For example: mojito");
    setActiveItem("name");
    setInputValue("");
  };

  const handleSearchByIngredientClick = () => {
  if (searchInputRef.current) {
      searchInputRef.current.focus();
     }
     setPlaceholder("For example: gin");
    setActiveItem("ingredient");
    setInputValue("");
  };

  const handleSearchByFirstLetterClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setPlaceholder("For example: a");
    setActiveItem("firstLetter");
   setInputValue("");
  };

  const handleRandomDrinkClick = () => {
    handleRandomDrink();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setPlaceholder("Random drink");
    setActiveItem("random");
    setInputValue("");
  };

  return (
    <>
      <section className="search-header">
        <h1>
          {type === "favorites" ? "Favourite recipes" : "Cocktail recipes"}
        </h1>
        {type !== "favorites" && (
          <>
            <SearchNavigation
              onSearchByNameClick={handleSearchByNameClick}
              onSearchByIngredientClick={handleSearchByIngredientClick}
              onSearchByFirstLetter={handleSearchByFirstLetterClick}
              onRandomDrink={handleRandomDrinkClick}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />

            <SearchBar 
              onSearch={setSearchTerm} 
              inputRef={searchInputRef} 
              placeholder={placeholder}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </>
        )}
      </section>
      {type !== "favorites" && (
        <section className="cocktail-list-container">
          {loading ? (
            <Loader />
          ) : (

            <CocktailsList
              items={searchResults.length > 0 ? searchResults : items}
            />
          )}
        </section>
      )}
    </>
  );
};


export default DynamicHeader;
