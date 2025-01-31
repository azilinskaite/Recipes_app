import React from 'react';
import FavouriteItemComponent from "../FavouriteItemComponent/FavouriteItemComponent.jsx";
import { useFavourites } from '../FavouritesContext/FavouritesContext.jsx';

const FavouritesList = () => {
    const { favourites } = useFavourites();

    return (

        // fix to correct layout
        <div>
        <h1>My Favorites</h1>
        {favourites.map(item => (
          <FavouriteItemComponent key={item.id} item={item} />
        ))}
      </div>
    );
  };

  export default FavouritesList;