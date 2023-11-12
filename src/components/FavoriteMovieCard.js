import React, { useState } from 'react'
import { useFavorites } from './FavoritesContext';
import "./styles/FavoriteMovieCard.css"
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

const FavoriteMovieCard = ({ favoriteMovie }) => {

  const { removeFavoriteMovie } = useFavorites();
  const { Poster, Title, Year, Type, imdbID } = favoriteMovie;
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div id="favorite-movie-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={Poster} id="favorite-movie-poster" alt={Title}></img>
      <span id="favorite-movie-name">{Title}</span>
      <div id="favorite-movie-info-column">
        <span id="favorite-movie-info">Year: {Year}</span>
        {isHovered && (
          <IconButton sx={{ color: "black" }} onClick={() => removeFavoriteMovie(imdbID)}  >
            <CancelIcon />
          </IconButton>
        )}
        <span id="favorite-movie-info">Type: {Type}</span>
      </div>
    </div>
  )
}

export default FavoriteMovieCard
