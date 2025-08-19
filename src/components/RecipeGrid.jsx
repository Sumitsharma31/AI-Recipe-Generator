import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({ recipes, onSelectRecipe }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {recipes.map((recipe, index) => (
      <RecipeCard key={index} recipe={recipe} onSelect={onSelectRecipe} />
    ))}
  </div>
);

export default RecipeGrid;
