import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "../Cocktail-list-component-AR/Cocktail-list.css";


const CocktailsList = ({ items = []}) => {
 
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const toggleFavourite = (drink) => {
    const isFavourite = favourites.some((fav) => fav.idDrink === drink.idDrink);
    if (isFavourite) {
      removeFromFavourites(drink.idDrink);
    } else {
      addToFavourites(drink);
    }
  };

  return (
    <section>
      <div className="cocktail-grid">
        {}
        {items.map((drink) => (
          <div key={drink.idDrink} className="productCartContainer">
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
