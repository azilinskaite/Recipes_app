import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "../Cocktail-list-component-AR/Cocktail-list.css";

const CocktailsList = ({ items = [] }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const toggleFavourite = (drink) => {
    // refactor to use ternary operator for readability
    favourites.some((fav) => fav.idDrink === drink.idDrink)
      ? removeFromFavourites(drink.idDrink)
      : addToFavourites(drink);
  };

  return (
    <section>
      <div className="cocktail-grid">
        {items.map((drink) => (
          // Refactor to use a separate component for each cocktail card for readability and reusability
          <CocktailCard
            key={drink.idDrink}
            drink={drink}
            isFavourite={favourites.some(
              (fav) => fav.idDrink === drink.idDrink
            )}
            toggleFavourite={toggleFavourite}
          />
        ))}
      </div>
    </section>
  );
};

// Extract the CocktailCard component to a separate component for reusability and readability
const CocktailCard = ({ drink, isFavourite, toggleFavourite }) => (
  <div className="productCartContainer">
    <Link to={`/cocktail/${drink.idDrink}`}>
      <img
        src={drink.strDrinkThumb}
        alt={`A cocktail called ${drink.strDrink}`}
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
    <div className="iconContainer">
      <h2>{drink.strDrink}</h2>
      <button
        className="iconDiv"
        onClick={() => toggleFavourite(drink)}
        aria-label={`Toggle favourite for ${drink.strDrink}`}
      >
        <FontAwesomeIcon
          icon={isFavourite ? faHeartSolid : faHeartRegular}
          size="2x"
          color="red"
          className="heart"
        />
      </button>
    </div>
    <p>{drink.strCategory}</p>
  </div>
);

export default CocktailsList;
