import React, { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) =>
{ const[favourites, setFavourites] = useState([]);

    const addToFavourites = (item) => {
        setFavourites((prevFavourites) =>
        [...prevFavourites, item]);
    };

    const removeFromFavourites = (itemId) => {
        setFavourites((prevFavourites) =>
        prevFavourites.filter(item => item.idDrink !== itemId));
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>{children}</FavouritesContext.Provider>
    )
};

export const useFavourites = () => useContext(FavouritesContext);