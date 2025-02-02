import React, { useState } from "react";
import "./SearchByName.css";

const SearchByName = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Store user input
  const [cocktailList, setCocktailList] = useState([]); // Store API results

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
