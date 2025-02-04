import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import SearchHeader from "./Components/SearchHeaderComponent/SearchHeaderComponent";
import CocktailsList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import Footer from "./Components/Footer Component/Footer.jsx";
import { FavouritesProvider } from "./Components/FavouritesContext/FavouritesContext.jsx";
import FavouritesList from "./Components/FavouritesListComponent/FavouritesListComponent.jsx";
import { CocktailDetails } from "./Components/Recipes/Recipe.jsx";
// import SearchByName from "./Components/CocktailSearch Component/SearchByName.jsx";

const Homepage = () => (
  <div>
    <SearchHeader /> {/* Include SearchHeader component */}
  </div>
);

const SignOut = () => <h2>Signing Out...</h2>;

function App() {
  return (
    <FavouritesProvider>
      <Router>
        <div className="App">
          <header>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/favorites" element={<FavouritesList />} />
              <Route path="/signout" element={<SignOut />} />
            </Routes>
          </header>
          <main>
            {/* <SearchHeader /> */}
            {/* <SearchByName /> */}
            {/* <CocktailsList /> */}

            <Routes>
              <Route path="/" element={<CocktailsList />} />
              <Route path="/cocktail/:id" element={<CocktailDetails />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </FavouritesProvider>
  );
}

export default App;
