import React, { useState } from "react";

const InputForm = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState({
    ingredients: "",
    diet: "None",
    cuisine: "Indian",
    time: "Any",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8"
    >
      <div className="mb-4">
        <label
          htmlFor="ingredients-input"
          className="block text-lg font-semibold mb-2 text-slate-700"
        >
          List your Cooking stuff
        </label>
        <textarea
          id="ingredients-input"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          rows="4"
          className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
          placeholder="e.g., chicken breast, broccoli, garlic, olive oil, lemon"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="diet-filter"
            className="block text-sm font-medium text-slate-600 mb-1"
          >
            Dietary Preference
          </label>
          <select
            id="diet-filter"
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
          >
            <option>None</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
            <option>Gluten-Free</option>
            <option>Keto</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="cuisine-filter"
            className="block text-sm font-medium text-slate-600 mb-1"
          >
            Cuisine Style
          </label>
          <select
            id="cuisine-filter"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
          >
            <option>Any</option>
            <option>Indian</option>
            <option>Italian</option>
            <option>Mexican</option>
            <option>Asian</option>
            <option>American</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="time-filter"
            className="block text-sm font-medium text-slate-600 mb-1"
          >
            Max Cooking Time
          </label>
          <select
            id="time-filter"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
          >
            <option>Any</option>
            <option>15 minutes</option>
            <option>30 minutes</option>
            <option>45 minutes</option>
            <option>1 hour</option>
          </select>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition-transform transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            {isLoading ? "Generating..." : "Generate Recipes"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default InputForm;
