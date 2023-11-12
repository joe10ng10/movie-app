import React, { useEffect, useState } from 'react'
import "./styles/SelectedMovieDetails.css";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFavorites } from './FavoritesContext';

const SelectedMovieDetails = ({ selectedMovie, onMovieSelect, }) => {

  const { addFavoriteMovie } = useFavorites();
  const [movieInfo, setMovieInfo] = useState();

  



  // we call this api to get info about the selectedMovie ID (URL takes the imdbID) and save the info
  // in the movieInfo useState variable (go to MovieCard.js line 9 to understand)
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=df5008c3&i=${selectedMovie}`)
      .then(response => response.json())
      .then(data => setMovieInfo(data))

  }, [selectedMovie])

  


  return (
    <div id="selected-movie">
      <img id="selected-movie-image" src={movieInfo?.Poster} alt={movieInfo?.Title}></img>
      <div id="selected-movie-details">
        <span id="selected-movie-name">{movieInfo?.Type}: {movieInfo?.Title}</span>
        <span id="other-selected-movie-details">IMDB Rating: <span style={{ opacity: 0.7 }}>{movieInfo?.imdbRating}</span></span>
        <span id="other-selected-movie-details">Year: <span style={{ opacity: 0.7 }}>{movieInfo?.Year}</span></span>
        <span id="other-selected-movie-details">Language: <span style={{ opacity: 0.7 }}>{movieInfo?.Language}</span></span>
        <span id="other-selected-movie-details">Rated: <span style={{ opacity: 0.7 }}>{movieInfo?.Rated}</span></span>
        <span id="other-selected-movie-details">Released: <span style={{ opacity: 0.7 }}>{movieInfo?.Released}</span></span>
        <span id="other-selected-movie-details">Runtime: <span style={{ opacity: 0.7 }}>{movieInfo?.Runtime}</span></span>
        <span id="other-selected-movie-details">Genre: <span style={{ opacity: 0.7 }}>{movieInfo?.Genre}</span></span>
        <span id="other-selected-movie-details">Director: <span style={{ opacity: 0.7 }}>{movieInfo?.Director}</span></span>
        <span id="other-selected-movie-details">Actors: <span style={{ opacity: 0.7 }}>{movieInfo?.Actors}</span></span>
        <span id="other-selected-movie-details">Plot: <span style={{ opacity: 0.7 }}>{movieInfo?.Plot}</span></span>
        <span id="add-to-my-list-button">
          <Button 
          onClick={() => addFavoriteMovie(movieInfo)} 
          variant="contained" 
          size="large" 
          sx={{ backgroundColor: "white" }}
          >
            <AddIcon />
            Add To My List
          </Button>
        </span>
        



      </div>
      <span id="cancel-button" onClick={() => onMovieSelect()}><CancelOutlinedIcon fontSize='large' /></span>
    </div>
  )
}

export default SelectedMovieDetails
