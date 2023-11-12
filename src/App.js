import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MyList from "./components/MyList"
import HomePage from "./components/HomePage";
import { FavoritesProvider } from './components/FavoritesContext';


function App() {

  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/MyList" element={<MyList />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;


