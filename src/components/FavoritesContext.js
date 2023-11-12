import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);


  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavoriteMovie = (imdbId) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((movie) => movie.imdbID !== imdbId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteMovies, addFavoriteMovie, removeFavoriteMovie }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
