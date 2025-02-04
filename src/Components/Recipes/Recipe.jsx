import "./Recipe.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="recipe_container">
      <div className="infoDiv">
        <div className="image-container">
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className="basicInfo_Container">
          <p>
            <strong>Category:</strong> {cocktail.strCategory}
          </p>
          <p>
            <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
          </p>
          <h3>Ingredients:</h3>

          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>
            <strong>Instructions:</strong> {cocktail.strInstructions}
          </p>

          <Link to="/" className="backDiv">
            ⬅ Back to Cocktails
          </Link>
        </div>
      </div>
    </div>
  );
};
