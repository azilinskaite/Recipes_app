import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchBar from "./SearchBar";
import SearchNavigation from "./SearchNavigation";
import CocktailsList from "../Cocktail-list-component-AR/Cocktail-list";
import Loader from "../LoaderComponent/Loader"; // Import Loader
import "./DynamicHeader.css";

const DynamicHeader = ({ type }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [placeholder, setPlaceholder] = useState("Search for a cocktail...");
  const [inputValue, setInputValue] = useState("");
  const searchInputRef = useRef(null);

  // Reusable error handler
  const handleApiError = (error, errorMessage) => {
    console.error(errorMessage, error);
    setSearchResults([]);
    setLoading(false);
  };

  // Fetch the initial items when the component mounts
  useEffect(() => {
    const fetchInitialItems = async () => {
      setLoading(true); // Show loader
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data.drinks || []);
      } catch (error) {
        handleApiError(error, "Error fetching initial items:");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchInitialItems();
  }, []);

  // Function to handle search by name
  const handleSearch = useCallback(async (term) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data.drinks || []);
    } catch (error) {
      handleApiError(error, "Error searching for cocktails:");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, []);
  // Empty dependancy array means that function doesn't get changed

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm, handleSearch]);

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
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSearchResults(data.drinks || []);
      } catch (error) {
        handleApiError(error, "Error searching by ingredient:");
      } finally {
        setLoading(false);
      }
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

    // Perform search when there is an input
    if (letter && letter.length === 1) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSearchResults(data.drinks || []);
      } catch (error) {
        handleApiError(error, "Error searching by first letter:");
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to handle random drink
  const handleRandomDrink = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data.drinks || []);
    } catch (error) {
      handleApiError(error, "Error fetching random drink:");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
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

  const handleRandomDrinkClick = () => {
    handleRandomDrink();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setPlaceholder("Random drink");
    setActiveItem("random");
    setInputValue("");
  };

  // for readability
  const isFavorites = type === "favorites";

  return (
    <>
      <section className="search-header">
        <h1>
          {type === "favorites" ? "Favourite recipes" : "Cocktail recipes"}
        </h1>
        {!isFavorites && (
          <>
            <SearchNavigation
              onSearchByNameClick={handleSearchByNameClick}
              onSearchByIngredientClick={handleSearchByIngredient}
              onSearchByFirstLetter={handleSearchByFirstLetter}
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
      {!isFavorites && (
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
