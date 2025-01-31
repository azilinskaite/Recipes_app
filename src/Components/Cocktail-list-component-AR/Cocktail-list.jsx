import React, { useState, useEffect } from "react";
import "./Cocktail-list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

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
    <div className="cocktail-grid">
      {" "}
      {}
      {cocktail.map((drink) => (
        <div key={drink.idDrink} className="productCartContainer">
          {" "}
          {}
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="infoDiv">
            <div className="textContainer">
              <h2>{drink.strDrink}</h2>
              <p>{drink.strCategory}</p>
            </div>
            <div className="iconDiv">
              <FontAwesomeIcon
                icon={faHeart}
                size="2x"
                color="red"
                className="heart"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CocktailsList;
