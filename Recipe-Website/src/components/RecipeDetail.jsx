import React from "react";

const RecipeDetail = ({ recipe, onBack }) => {
  if (!recipe) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No recipe selected.</p>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="recipe-detail max-w-4xl mx-auto">
      {/* Header with back button and print button - hidden in print */}
      <div className="flex justify-between items-center mb-6 no-print">
        <button
          onClick={onBack}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          ← Back to Recipes
        </button>
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
        >
          🖨️ Print Recipe
        </button>
      </div>

      {/* Recipe content - optimized for printing */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 print:border-2 print:border-black print:rounded-none print:shadow-none">
        {/* Recipe Title */}
        <div className="text-center mb-6 print:mb-4">
          <h1 className="text-3xl font-bold text-gray-800 print:text-black print:text-2xl mb-2">
            {recipe.name}
          </h1>
          <div className="flex justify-center gap-4 text-sm text-gray-600 print:text-black">
            <span className="bg-gray-100 px-3 py-1 rounded print:bg-transparent print:border print:border-black">
              {recipe.type}
            </span>
            <span className="font-medium">Cook Time: {recipe.cookTime}</span>
          </div>
        </div>

        {/* Two-column layout for print optimization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
          {/* Ingredients Section */}
          <div className="print:break-inside-avoid">
            <h2 className="text-xl font-semibold text-gray-800 print:text-black mb-3 print:text-lg border-b-2 border-gray-300 print:border-black pb-1">
              Ingredients
            </h2>
            <ul className="space-y-1 text-gray-700 print:text-black">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 print:text-black mr-2">•</span>
                  <span className="text-sm print:text-xs">{ingredient}</span>
                </li>
              ))}
            </ul>

            {/* Optional Ingredients */}
            {recipe.optionalIngredients &&
              recipe.optionalIngredients.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-md font-medium text-gray-700 print:text-black mb-2 print:text-sm">
                    Optional:
                  </h3>
                  <ul className="space-y-1 text-gray-600 print:text-black">
                    {recipe.optionalIngredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-400 print:text-black mr-2">
                          •
                        </span>
                        <span className="text-sm print:text-xs italic">
                          {ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>

          {/* Instructions Section */}
          <div className="print:break-inside-avoid">
            <h2 className="text-xl font-semibold text-gray-800 print:text-black mb-3 print:text-lg border-b-2 border-gray-300 print:border-black pb-1">
              Instructions
            </h2>
            <ol className="space-y-3 text-gray-700 print:text-black print:space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-600 text-white print:bg-black print:text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-bold print:w-5 print:h-5">
                    {index + 1}
                  </span>
                  <span className="text-sm print:text-xs leading-relaxed">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Recipe Footer - Print Only */}
        <div className="hidden print:block mt-6 pt-4 border-t-2 border-black">
          <div className="text-center text-xs text-black">
            <p>
              Recipe: {recipe.name} • Type: {recipe.type} • Cook Time:{" "}
              {recipe.cookTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
