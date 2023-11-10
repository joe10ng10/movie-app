import Navbar from "./components/Navbar";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import React, { useState, useEffect } from 'react';
import SelectedMovieDetails from "./components/SelectedMovieDetails";





function App() {

  const [userInput, updateUserInput] = useState("");                     //this is what the user types in the search box
  const [movieRecommendations, getMovieRecommendations] = useState([]);   //movies from api after the user finishes typing
  const [timeoutId, updateTimeoutId] = useState();             // for debouncing when user is typing in the search box
  const [selectedMovie, onMovieSelect] = useState();           //variable used when showing details of a selected movie
  const [favoriteMovies, addFavoriteMovie] = useState([]);     //variable for movie list

  console.log(favoriteMovies);


  const onInputChange = (event) => {              //we use this to track the users input so we can
    clearTimeout(timeoutId)                       //interact with the api while the user types
    updateUserInput(event.target.value);
    const timeout = setTimeout(() => callAPI(), 300);  //we are debouncing so the api doesnt get called
    updateTimeoutId(timeout);                        //after every letter, instead when the user is done typing 
  };

  useEffect(() => {
    callAPI();
  }, []);

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







// read below for the comments about this block of code :)
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="search">
          <Search userInput={userInput} updateUserInput={updateUserInput} onInputChange={onInputChange} />
        </div>

        
        {selectedMovie && <SelectedMovieDetails selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} addFavoriteMovie={addFavoriteMovie} />} 

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
  );
}

export default App;


// on line 74 we have a conditional rendering logic that only renders movie cards to the screen after the user has typed in the searchbar
//and the api finds the movies if not, you will always see "No movies found." on the screen

//on line 70 we have a conditional rendering logic that only renders movie details if the user clicks on a movie card
//ps. clicking on a card puts a movie object into the "selectedMovie" useState hook


// In Summary....
// The running order/logic of this code when the user types in the search bar goes as follows
// 1. Search.js (line 10-16)
// 2. MovieCard.js
// 3. SelectedMovieDetails.js 
