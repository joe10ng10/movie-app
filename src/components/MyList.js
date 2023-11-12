import React from 'react'
import FavoriteMovieCard from './FavoriteMovieCard';
import { useFavorites } from './FavoritesContext';
import "./styles/MyList.css"

const MyList = () => {
  const { favoriteMovies } = useFavorites();
  


  return (
    <>

      <div id="favorite-movie-list">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((favoriteMovie) => (
            <FavoriteMovieCard key={favoriteMovie.imdbID} favoriteMovie={favoriteMovie} />
          ))
        ) : (
          <p>No movies found.</p>
        )}

      </div>
    </>
  )
}

export default MyList
