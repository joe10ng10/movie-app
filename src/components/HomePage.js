import "./styles/HomePage.css";
import Search from "./Search";
import MovieCard from "./MovieCard";
import React, { useState, useEffect, Fragment } from 'react';
import SelectedMovieDetails from "./SelectedMovieDetails";
import { useFavorites } from './FavoritesContext';



const HomePage = () => {

    const [userInput, updateUserInput] = useState("");                     //this is what the user types in the search box
    const [movieRecommendations, getMovieRecommendations] = useState([]);   //movies from api after the user finishes typing
    const [timeoutId, updateTimeoutId] = useState();             // for debouncing when user is typing in the search box
    const [selectedMovie, onMovieSelect] = useState();           //variable used when showing details of a selected movie
    const { favoriteMovies, addFavoriteMovie } = useFavorites();     


    const onInputChange = (event) => {              //we use this to track the users input so we can
        clearTimeout(timeoutId)                       //interact with the api while the user types
        updateUserInput(event.target.value);
        const timeout = setTimeout(() => callAPI(), 300);  //we are debouncing so the api doesnt get called
        updateTimeoutId(timeout);                        //after every letter, instead when the user is done typing 
    };

    useEffect(() => {
        callAPI();
    });

    // function to call the OMDB movie api using the user input and fill up the movie recommendations
    const callAPI = () => {
        fetch(`http://www.omdbapi.com/?apikey=df5008c3&s=${userInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.Search) {
                    getMovieRecommendations(data.Search);
                } else {
                    getMovieRecommendations([]);
                }
            })

            .catch(error => {
                console.error('Error fetching data from OMDB API', error);
            });

    }

    // end of api fetch



    return (
        <>
            
            <div className="content">
                <div className="search">
                    <Search userInput={userInput} updateUserInput={updateUserInput} onInputChange={onInputChange} />
                </div>

                {selectedMovie && <SelectedMovieDetails selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} favoriteMovies={favoriteMovies} addFavoriteMovie={addFavoriteMovie} />}

                <div className="movie-recommedations">
                    {movieRecommendations.length > 0 ? (
                        movieRecommendations.map((movieRecommendation) => (
                            <MovieCard key={movieRecommendation.imdbID} movieRecommendation={movieRecommendation} onMovieSelect={onMovieSelect} />
                        ))
                    ) : (
                        <p>No movies found.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomePage
