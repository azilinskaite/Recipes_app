import React from "react";
import { useFavourites } from "../FavouritesContext/FavouritesContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FavouriteItemComponent = ({ item }) => {
  const { removeFromFavourites } = useFavourites();

  return (
    <div className="productCartContainer">
      <Link to={`/cocktail/${item.idDrink}`}>
        <img
          src={item.strDrinkThumb}
          alt={item.strDrink}
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <div className="iconContainer">
        <h2>{item.strDrink}</h2>
        <button
          className="iconDiv"
          onClick={() => removeFromFavourites(item.idDrink)}
        >
          <FontAwesomeIcon
            icon={faHeartSolid}
            size="2x"
            color="red"
            className="heart"
          />
        </button>
      </div>
      <p>{item.strCategory}</p>
    </div>
  );
};

export default FavouriteItemComponent;
