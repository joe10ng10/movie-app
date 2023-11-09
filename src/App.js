import Navbar from "./components/Navbar";
import "./App.css";
import Search from "./components/Search";




function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="search">
          <Search />
          <div className="movie-recommedations"></div>
        </div>
        
      </div>
    </>
  );
}

export default App;
