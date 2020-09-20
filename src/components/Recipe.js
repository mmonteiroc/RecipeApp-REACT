import React from "react";
import style from './recipe.module.css'

const Recipe = ({ recipe }) => {
  return (
    <div className={style.recipe}>
      <h2 >{recipe.label}</h2>
      <p>{recipe.calories} KCAL</p>
      <img className={style.image} src={recipe.image} alt={"Image of " + recipe.label} />
      <ol>
      {recipe.ingredients.map((indv, index) => (
          <li key={indv.text + index}>{indv.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
