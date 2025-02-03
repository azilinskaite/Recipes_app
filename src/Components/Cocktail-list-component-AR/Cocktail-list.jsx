import React, { useState, useEffect } from "react";
import SearchHeader from "../SearchHeaderComponent/SearchHeaderComponent.jsx";
import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Recipe } from "../Recipes/Recipe.jsx";

const CocktailsList = () => {
  const [cocktail, setCocktail] = useState([]);
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        setCocktail(data.drinks);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleFavourite = (drink) => {
    const isFavourite = favourites.some((fav) => fav.idDrink === drink.idDrink);
    if (isFavourite) {
      removeFromFavourites(drink.idDrink);
    } else {
      addToFavourites(drink);
    }
  };
  const [showComponent, setshowComponent] = useState(false);
  return (
    <section>
      <SearchHeader />
      <div className="cocktail-grid">
        {" "}
        {}
        {cocktail.map((drink) =>
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
              <p>{drink.strIngredient}</p>
            </div>
          ) : (
            <Recipe />
          )
        )}
      </div>
    </section>
  );
};

export default CocktailsList;
