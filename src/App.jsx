import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import DynamicHeader from "./Components/SearchHeaderComponent/DynamicHeader";
import CocktailsList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import Footer from "./Components/Footer Component/Footer.jsx";
import { FavouritesProvider } from "./Components/FavouritesContext/FavouritesContext.jsx";
import FavouritesList from "./Components/FavouritesListComponent/FavouritesListComponent.jsx";
import { CocktailDetails } from "./Components/Recipes/Recipe.jsx";
import { useFavourites } from "./Components/FavouritesContext/FavouritesContext.jsx";

const SignOut = () => {
  const navigate = useNavigate();
  const { clearAllFavourites } = useFavourites();
  
  useEffect(() => {
    clearAllFavourites();
    navigate('/');
  }, [navigate, clearAllFavourites]);

  return null;
};

function App() {

  useEffect(() => {
    document.title = "Cocktail Kungen";
  }, []);

  return (
    <FavouritesProvider>
      <Router>
        <div className="App">
          <header className="header">
            <Header />
          </header>
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <DynamicHeader type="search" />
                    <CocktailsList />
                  </>
                }
              />
              <Route
                path="/favorites"
                element={
                  <>
                    <DynamicHeader type="favorites" />
                    <FavouritesList />
                  </>
                }
              />
              <Route path="/signout" element={<SignOut />} />
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
