import React, { useState, useEffect } from "react";

const CocktailsList = () => {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setCocktail(data.drinks); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>List of cocktails</h1>
      <ul>
        {cocktail.map((drink) => (
          <li key={drink.idDrink}>
            {drink.strDrink}
            {drink.strCategory}
            <img
              src={drink.strDrinkThumb}
              alt={drink.strName}
              style={{ width: "200px", height: "200px" }} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailsList;
