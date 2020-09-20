import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = "0ca12078";
  const API_KEY = "cb0a4bd879d6cab97b2d74a959186c32";

  /**
   * States
   */
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  /**
   * Effects
   */

  // MOUNTED
  useEffect(() => {
    getRecipies("chicken");
  }, []);

  /**
   * Handlers & functions
   */
  const doSearch = (e) => {
    e.preventDefault();
    getRecipies(search);
    setSearch("");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const getRecipies = async (text) => {
    const response = await (
      await fetch(
        `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${API_KEY}`
      )
    ).json();
    setRecipes(response.hits);
    console.log(response.hits);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={doSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={searchHandler}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((indv) => (
          <Recipe key={indv.recipe.url} recipe={indv.recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
