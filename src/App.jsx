import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import CocktailsList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import Footer from "./Components/Footer Component/Footer.jsx"
import { FavouritesProvider } from "./Components/FavouritesContext/FavouritesContext.jsx"
import FavouritesList from "./Components/FavouritesListComponent/FavouritesListComponent.jsx";

const Homepage = () => <h2>Welcome to Homepage</h2>;
const SignOut = () => <h2>Signing Out...</h2>;

function App() {
  return (
    <FavouritesProvider>
    <div className="App">
      <header>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CocktailsList />} />
            <Route path="/favorites" element={<FavouritesList />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </Router>
      </header>

      <main>
      </main>

      <Footer />
    </div>
    </FavouritesProvider>
  );
}

export default App;
