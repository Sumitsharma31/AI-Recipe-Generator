import React, { useState, useCallback } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import InitialMessage from "./components/InitialMessage";
import RecipeGrid from "./components/RecipeGrid";
import RecipeModal from "./components/RecipeModal";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleGenerate = useCallback(async (formData) => {
    if (!formData.ingredients.trim()) {
      setError("Please enter some ingredients to get started.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setRecipes([]);

    const prompt = `You are a creative chef AI. Based on the following ingredients, generate 3 distinct recipes.
        
        Ingredients available: ${formData.ingredients}.
        
        Constraints:
        - Dietary Preference: ${
          formData.diet === "None" ? "No specific preference." : formData.diet
        }
        - Cuisine Style: ${
          formData.cuisine === "Any"
            ? "Be creative, any style is fine."
            : formData.cuisine
        }
        - Maximum Cooking Time: ${
          formData.time === "Any" ? "No time limit." : formData.time
        }

        For each recipe, provide the following information in a structured JSON format. The final output must be a single JSON array containing the 3 recipe objects. Do not include any text outside of the JSON array.
        
        JSON Structure for each recipe object:
        {
          "title": "Creative Recipe Title",
          "description": "A brief, enticing description of the dish.",
          "cooking_time": "Estimated total cooking time (e.g., '30 minutes').",
          "ingredients_needed": [{"item": "Ingredient Name", "quantity": "e.g., 1 cup"}],
          "instructions": ["Step 1: First instruction..."]
        }`;

    try {
      const apiKey = "AIzaSyA-127JH9A6o4EksB8g7Mhz2-3ljUBLG9Y"; //API key
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" },
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData?.error?.message ||
            `API request failed with status ${response.status}`
        );
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0) {
        const parsedRecipes = JSON.parse(
          result.candidates[0].content.parts[0].text
        );
        setRecipes(parsedRecipes);
      } else {
        if (result.promptFeedback && result.promptFeedback.blockReason) {
          throw new Error(
            `Request was blocked. Reason: ${result.promptFeedback.blockReason}. Please adjust your input.`
          );
        }
        throw new Error("Could not parse recipes from the AI's response.");
      }
    } catch (e) {
      console.error("Error fetching recipes:", e);
      setError(e.message || "An unknown error occurred.");
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    if (isLoading) return <Spinner />;
    if (error) return <ErrorMessage message={error} />;
    if (recipes.length > 0)
      return (
        <RecipeGrid recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      );
    if (hasSearched)
      return (
        <ErrorMessage message="No recipes could be generated for these ingredients. Try being more general!" />
      );
    return <InitialMessage />;
  };

  return (
    <div className="bg-gradient-to-br from-slate-100 to-emerald-100 text-slate-800 min-h-screen">
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        <Header />
        <InputForm onGenerate={handleGenerate} isLoading={isLoading} />
        <div id="results-container">{renderContent()}</div>
      </div>
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
