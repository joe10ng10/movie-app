import React, { useEffect, useState } from 'react'
import "./SelectedMovieDetails.css";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const SelectedMovieDetails = ({selectedMovie, onMovieSelect}) => {

    const [movieInfo, setMovieInfo] = useState();

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=df5008c3&i=${selectedMovie}`)
            .then(response => response.json())
            .then(data => setMovieInfo(data))

    },[selectedMovie])


  return (
    <div id="selected-movie">
      <img id="selected-movie-image" src={movieInfo?.Poster}></img>
      <div id="selected-movie-details">
        <span id="selected-movie-name">{movieInfo?.Type}: {movieInfo?.Title}</span>
        <span id="other-selected-movie-details">IMDB Rating: <span style={{opacity: 0.7}}>{movieInfo?.imdbRating}</span></span>
        <span id="other-selected-movie-details">Year: <span style={{opacity: 0.7}}>{movieInfo?.Year}</span></span>
        <span id="other-selected-movie-details">Language: <span style={{opacity: 0.7}}>{movieInfo?.Language}</span></span>
        <span id="other-selected-movie-details">Rated: <span style={{opacity: 0.7}}>{movieInfo?.Rated}</span></span>
        <span id="other-selected-movie-details">Released: <span style={{opacity: 0.7}}>{movieInfo?.Released}</span></span>
        <span id="other-selected-movie-details">Runtime: <span style={{opacity: 0.7}}>{movieInfo?.Runtime}</span></span>
        <span id="other-selected-movie-details">Genre: <span style={{opacity: 0.7}}>{movieInfo?.Genre}</span></span>
        <span id="other-selected-movie-details">Director: <span style={{opacity: 0.7}}>{movieInfo?.Director}</span></span>
        <span id="other-selected-movie-details">Actors: <span style={{opacity: 0.7}}>{movieInfo?.Actors}</span></span>
        <span id="other-selected-movie-details">Plot: <span style={{opacity: 0.7}}>{movieInfo?.Plot}</span></span>
        
        
      </div>
      <span id="cancel-button" onClick={() => onMovieSelect()}><CancelOutlinedIcon fontSize='large'/></span>
    </div>
  )
}

export default SelectedMovieDetails
