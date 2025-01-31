import React, { useState, useEffect } from "react";
import './Cocktail-list.css'; 
import SearchHeader from '../SearchHeaderComponent/SearchHeaderComponent.jsx';

const CocktailsList = () => {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        setCocktail(data.drinks); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section>
      <SearchHeader/>
    <div className="cocktail-grid"> {}
      {cocktail.map((drink) => (
        <div key={drink.idDrink} className="productCartContainer"> {}
        <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            style={{ width: "100%", height: "auto" }}
          />
          <h2>{drink.strDrink}</h2>
          <p>{drink.strCategory}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default CocktailsList;
