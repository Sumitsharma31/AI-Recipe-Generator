import React from "react";

const RecipeCard = ({ recipe, onSelect }) => (
  <div
    onClick={() => onSelect(recipe)}
    className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="h-48 bg-slate-200">
      <img
        src={`https://placehold.co/600x400/a7f3d0/1e293b?text=${encodeURIComponent(
          recipe.title.split(" ").slice(0, 2).join(" ")
        )}`}
        alt={recipe.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/e2e8f0/475569?text=Image+Error";
        }}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">
        {recipe.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 h-10 overflow-hidden text-ellipsis">
        {recipe.description}
      </p>
      <div className="flex items-center text-sm text-slate-500">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{recipe.cooking_time}</span>
      </div>
    </div>
  </div>
);

export default RecipeCard;
