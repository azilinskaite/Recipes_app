import React, { useState, useEffect } from "react";
import './Cocktail-list.css'; 

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
    <div className="cocktail-grid"> {}
      {cocktail.map((drink) => (
        <div key={drink.idDrink}> {}
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
  );
};

export default CocktailsList;
