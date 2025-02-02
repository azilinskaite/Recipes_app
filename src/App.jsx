import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import Footer from "./Components/Footer Component/Footer";

import "./App.css";
import SearchHeader from "./Components/SearchHeaderComponent/SearchHeaderComponent";
import CocktailList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import { ProductCart } from "./Components/SingleProductCart/ProductCart";
import CocktailsList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import Footer from "./Components/Footer Component/Footer.jsx"
import { FavouritesProvider } from "./Components/FavouritesContext/FavouritesContext.jsx"
import FavouritesList from "./Components/FavouritesListComponent/FavouritesListComponent.jsx";
// import SearchByName from "./Components/CocktailSearch Component/SearchByName.jsx";


const Homepage = () => (
  <div>
    <SearchHeader /> {/* Include SearchHeader component */}
  </div>
);
const Favorites = () => <h2>My Favourites</h2>;
const SignOut = () => <h2>Signing Out...</h2>;





function App() {
  return (
    <FavouritesProvider>
    <div className="App">
<header>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorites" element={<FavouritesList />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </Router>
 </header>
      <main>
        {/* <SearchHeader /> */}
        {/* <SearchByName /> */}
        <CocktailList />
        <ProductCart />

      </main>

      <Footer />
    </div>

    </FavouritesProvider>

  );
}

export default App;
