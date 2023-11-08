import Navbar from "./components/Navbar";
import "./App.css";



function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="search">Search</div>
        <div className="movie-display">Movie</div>
      </div>
    </>
  );
}

export default App;
