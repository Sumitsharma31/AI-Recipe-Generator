import React, { useState } from "react";

const RecipeModal = ({ recipe, onClose }) => {
  const [copyButtonText, setCopyButtonText] = useState(
    "Copy Recipe to Clipboard"
  );

  if (!recipe) return null;

  const handleCopy = () => {
    let textToCopy = `Recipe: ${recipe.title}\n\n`;
    textToCopy += `Description: ${recipe.description}\n`;
    textToCopy += `Cooking Time: ${recipe.cooking_time}\n\n`;
    textToCopy += "Ingredients:\n";
    recipe.ingredients_needed.forEach((ing) => {
      textToCopy += `- ${ing.quantity} ${ing.item}\n`;
    });
    textToCopy += "\nInstructions:\n";
    recipe.instructions.forEach((step, index) => {
      textToCopy += `${index + 1}. ${step}\n`;
    });

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopyButtonText("Copied!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyButtonText("Failed to Copy");
    }
    document.body.removeChild(textArea);
    setTimeout(() => setCopyButtonText("Copy Recipe to Clipboard"), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col z-10 mx-4">
        <div className="flex justify-between items-center p-5 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">{recipe.title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <p className="text-slate-600 mb-6">{recipe.description}</p>
          <h4 className="text-lg font-semibold text-slate-800 mb-3 border-b pb-2">
            Ingredients
          </h4>
          <ul className="space-y-2 mb-6 pl-2 text-slate-700">
            {recipe.ingredients_needed.map((ing, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-emerald-500">&#10003;</span>
                <span>
                  <strong>{ing.quantity}</strong> {ing.item}
                </span>
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-slate-800 mb-3 border-b pb-2">
            Instructions
          </h4>
          <ol className="space-y-4 text-slate-700">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="mb-3 flex items-start">
                <span className="mr-3 flex-shrink-0 bg-emerald-600 text-white rounded-full h-6 w-6 text-sm flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl">
          <button
            onClick={handleCopy}
            className="w-full bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition cursor-pointer"
          >
            {copyButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
