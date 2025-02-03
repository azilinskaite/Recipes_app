import React, { useState } from "react";
import Loader from "../LoaderComponent/Loader";
import "./SearchByName.css";

const SearchByName = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Store user input
  const [cocktailList, setCocktailList] = useState([]); // Store API results
  const [loading, setLoading] = useState(false); // Track loading state
  const [showLoaderForFiveSeconds, setShowLoaderForFiveSeconds] = useState(false);
  
  const handleSearch = async () => {
    if (!searchQuery) return; // Prevent empty searches
    
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCocktailList(data.drinks || []); // Update state with drinks list
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // Hide loader after 5 seconds, even if the fetch is faster
    setTimeout(() => {
      setLoading(false);
      setShowLoaderForFiveSeconds(false);
    }, 5000); // Ensure loader stays for at least 5 seconds
  };

  return (
    <div>
      <h1>Cocktail Recipes</h1>

      {/* Navigation Buttons */}
      <div>
        <button onClick={() => setSearchQuery("")}>Search by Name</button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Know what you want? Search it!"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>

      {/* Show loader while fetching data */}
      {loading && showLoaderForFiveSeconds && <Loader />} {/* Loader appears for 5 seconds */}

      {/* Display Results */}
      <div className="cocktail-list">
        {cocktailList.length > 0 ? (
          cocktailList.map((drink) => (
            <div key={drink.idDrink} className="cocktail-card">
              <h2>{drink.strDrink}</h2>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} width="150" />
              <p>{drink.strCategory}</p>
            </div>
          ))
        ) : (
          <p>No cocktails found. Try another name.</p>
        )}
      </div>
    </div>
  );
};

export default SearchByName;