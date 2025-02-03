import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import SearchHeader from "./Components/SearchHeaderComponent/SearchHeaderComponent";
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
        <CocktailsList />

      </main>

      <Footer />
    </div>

    </FavouritesProvider>

  );
}

export default App;
