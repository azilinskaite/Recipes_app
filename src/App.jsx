import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header Component/Header";
import SearchHeader from "./Components/SearchHeaderComponent/SearchHeaderComponent";
import CocktailList from "./Components/Cocktail-list-component-AR/Cocktail-list.jsx";
import { ProductCart } from "./Components/SingleProductCart/ProductCart";
import Footer from "./Components/Footer Component/Footer.jsx"

const Homepage = () => <h2>Welcome to Homepage</h2>;
const Favorites = () => <h2>My Favourites</h2>;
const SignOut = () => <h2>Signing Out...</h2>;

function App() {

    const [apiUrl, setApiUrl] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const [ingredient, setIngredient] = useState('');
    const [name, setName] = useState('');
    const [firstLetter, setFirstLetter] = useState('');
    const [random, setRandom] = useState('');
  
    const handleNavClick = (option) => {
      if (option === 'byName') {
        setApiUrl(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      } else if (option === 'byIngredient') {
        setApiUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`);
      } else if (option === 'byFirstLetter') {
        setApiUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${firstLetter}`);
      } else if (option === 'byRandom') {
        setApiUrl("www.thecocktaildb.com/api/json/v1/1/random.php");
      }
    };

    useEffect(() => {
      console.log("API URL changed:", apiUrl);
    }, [apiUrl]);

  return (
    <div className="App">
      <header>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </Router>
      </header>

      <main>
        <SearchHeader 
        onNavClick={handleNavClick}
        setName={setName}
        setIngredient={setIngredient}
        setFirstLetter={setFirstLetter}
        />
        <CocktailList />
        <ProductCart />
      </main>

      <Footer/>
    </div>
  );
}

export default App;
