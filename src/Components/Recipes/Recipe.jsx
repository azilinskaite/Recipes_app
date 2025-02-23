import "./Recipe.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setCocktail(response.data.drinks[0]);
      } catch (error) {
        setError("Failed to fetch details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cocktail) return <p>No details found.</p>;

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  const toggleFavourite = (drink) => {
    // can be simplified to
    favourites.some((fav) => fav.idDrink === drink.idDrink)
      ? removeFromFavourites(drink.idDrink)
      : addToFavourites(drink);
  };
  return (
    //<div className="recipe_container">
    <div className="infoDiv">
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="image"
      />
      <div className="basicInfo_Container">
        <div className="titleContainer">
          <h2>{cocktail.strDrink}</h2>
          <button className="iconDiv" onClick={() => toggleFavourite(cocktail)}>
            <FontAwesomeIcon
              icon={
                favourites.some((fav) => fav.idDrink === cocktail.idDrink)
                  ? faHeartSolid
                  : faHeartRegular
              }
              size="2x"
              color="red"
              className="heart"
            />
          </button>
        </div>
        <p>
          <strong>Category:</strong> {cocktail.strCategory}
        </p>
        <p>
          <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
        </p>
        <p>
          <strong>Ingredients:</strong>
        </p>

        <ul className="ingredients">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          <strong>Instructions:</strong>
        </p>
        <p className="instructions">{cocktail.strInstructions}</p>

        <Link to="/" className="backDiv">
          ⬅ Back to Cocktails
        </Link>
      </div>
    </div>
    //</div>
  );
};
