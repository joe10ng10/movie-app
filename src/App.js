import Navbar from "./components/Navbar";
import "./App.css";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import React, { useState, useEffect } from 'react';





function App() {

  const [userInput, updateUserInput] = useState("");
  const [movieRecommendations, getMovieRecommendations] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();


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
          console.log(movieRecommendations)
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
      <Navbar />
      <div className="content">
        <div className="search">
          <Search userInput={userInput} updateUserInput={updateUserInput} onInputChange={onInputChange} />
        </div>

        <div className="movie-recommedations">
          {movieRecommendations.length > 0 ? (
            movieRecommendations.map((movieRecommendation) => (
              <MovieCard key={movieRecommendation.imdbID} movieRecommendation={movieRecommendation} />
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
