import React from 'react';
import { useFavourites } from '../FavouritesContext/FavouritesContext.jsx';

const FavouriteItemComponent = ({ item }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();
  const isFavourite = favourites.some(fav => fav.id === item.id);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      removeFromFavourites(item.id);
    } else {
      addToFavourites(item);
    }
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <button onClick={handleFavouriteClick}>
        {isFavourite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default FavouriteItemComponent;
