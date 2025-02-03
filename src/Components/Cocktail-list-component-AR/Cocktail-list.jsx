import React, { useState, useEffect } from "react";
import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Recipe } from "../Recipes/Recipe.jsx";

const CocktailsList = ({ items = [] }) => {
  //const [cocktail, setCocktail] = useState([]);
  //const validItems = Array.isArray(items) ? items : [];
  //const validItems = Array.isArray(items) && items.length > 0 ? items : cocktail;
  const [showComponent, setshowComponent] = useState(false);
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const toggleFavourite = (drink) => {
    const isFavourite = favourites.some((fav) => fav.idDrink === drink.idDrink)
    if (isFavourite) {
      removeFromFavourites(drink.idDrink);
    } else {
      addToFavourites(drink);
    }
  };

  return (
    <section>

    {/* Fix to show recipes on idividual cards */}
      {/* <div className="cocktail-grid">
        {items.map((drink) =>
          !showComponent ? (
            <div
              key={drink.idDrink}
              className="productCartContainer"
              onClick={() => setshowComponent(true)}
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="iconContainer">
                <h2>{drink.strDrink}</h2>
                <button
                  className="iconDiv"
                  onClick={() => toggleFavourite(drink)}
                >
                  <FontAwesomeIcon
                    icon={
                      favourites.some((fav) => fav.idDrink === drink.idDrink)
                        ? faHeartSolid
                        : faHeartRegular
                    }
                    size="2x"
                    color="red"
                    className="heart"
                  />
                </button>
              </div>
              <p>{drink.strCategory}</p>
            </div>
          ) : (
            <Recipe />
          )
        )}
      </div> */}

      <div className="cocktail-grid">
        {items.map((drink) => (
          <div key={drink.idDrink} className="productCartContainer">
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="iconContainer">
              <h2>{drink.strDrink}</h2>
              <button
                className="iconDiv"
                onClick={() => toggleFavourite(drink)}
              >
                <FontAwesomeIcon
                  icon={
                    favourites.some((fav) => fav.idDrink === drink.idDrink)
                      ? faHeartSolid
                      : faHeartRegular
                  }
                  size="2x"
                  color="red"
                  className="heart"
                />
              </button>
            </div>
            <p>{drink.strCategory}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CocktailsList;
