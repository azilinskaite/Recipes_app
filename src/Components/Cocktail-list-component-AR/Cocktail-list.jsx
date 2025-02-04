import React, { useState, useEffect } from "react";
import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { CocktailDetails } from "../Recipes/Recipe.jsx";
import { Link } from "react-router-dom";

const CocktailsList = ({ items = []}) => {
  //const [cocktail, setCocktail] = useState([]);
  //const validItems = Array.isArray(items) ? items : [];
  //const validItems = Array.isArray(items) && items.length > 0 ? items : cocktail;
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  // useEffect(() => {
  //   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCocktail(data.drinks);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // useEffect(() => {
  //   // Fetch default cocktail list when the component mounts
  //   const fetchDefaultCocktails = async () => {
  //     const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  //     const data = await response.json();
  //     setCocktail(data.drinks || []);
  //   };
  //   fetchDefaultCocktails();
  // }, []);

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
      {/* <SearchHeader /> */}
      <div className="cocktail-grid">
        {}
        {items.map((drink) => (
          <div key={drink.idDrink} className="productCartContainer">
            <Link to={`/cocktail/${drink.idDrink}`}>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
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
