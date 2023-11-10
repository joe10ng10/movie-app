import React from 'react'
import "./MovieCard.css"

const MovieCard = ({movieRecommendation, onMovieSelect}) => {
  
  const { Poster, Title, Year, Type, imdbID} = movieRecommendation;

  return (
    <div id="movie-card" onClick={() => {onMovieSelect(imdbID)}}>
      <img src ={Poster} id="movie-poster"></img>
      <span id="movie-name">{Title}</span>
      <div id="movie-info-column">
        <span id="movie-info">Year: {Year}</span>
        <span id="movie-info">Type: {Type}</span>
      </div>
    </div>
  )
}

export default MovieCard
