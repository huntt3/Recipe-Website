import { useState, useEffect } from "react";

const RecipeBook = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipes from JSON file
    const loadRecipes = async () => {
      try {
        const response = await fetch("/recipes.json");
        const data = await response.json();
        setRecipes(data.Recipes || []);
      } catch (error) {
        console.error("Error loading recipes:", error);
      }
    };

    loadRecipes();
  }, []);

  return (
    <div className="recipe-book">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="recipe-page bg-white border-2 border-gray-800 rounded-lg p-6 mb-8 shadow-sm print:border-black print:mb-0 print:break-inside-avoid print:page-break-inside-avoid print:shadow-none print:rounded-none"
        >
          {/* Recipe Header */}
          <div className="recipe-header text-center mb-6 pb-3 border-b-2 border-gray-800 print:border-black">
            <h2 className="text-2xl font-bold text-gray-800 print:text-black mb-2 print:text-xl">
              {recipe.name}
            </h2>
            <div className="flex justify-center text-sm text-gray-700 print:text-black space-x-4">
              <span className="font-semibold">Type: {recipe.type}</span>
              <span className="font-semibold">&nbsp;</span>
              {recipe.cookTime && (
                <span className="font-semibold">
                  Cook Time: {recipe.cookTime}
                </span>
              )}
            </div>
          </div>
          {/* Recipe Content - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-8">
            {/* Ingredients Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 print:text-black mb-3 pb-1 border-b border-gray-600 print:border-black print:text-base">
                Ingredients
              </h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 print:text-black print:text-xs flex items-start"
                  >
                    <span className="text-gray-800 print:text-black mr-2 font-bold">
                      •
                    </span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>

              {/* Optional Ingredients */}
              {recipe.optionalIngredients &&
                recipe.optionalIngredients.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-gray-700 print:text-black mb-2 print:text-sm">
                      Optional:
                    </h4>
                    <ul className="space-y-1">
                      {recipe.optionalIngredients.map((ingredient, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 print:text-black print:text-xs flex items-start"
                        >
                          <span className="text-gray-600 print:text-black mr-2">
                            ◦
                          </span>
                          <span className="italic">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Instructions Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 print:text-black mb-3 pb-1 border-b border-gray-600 print:border-black print:text-base">
                Instructions
              </h3>
              <ol className="space-y-3 print:space-y-2">
                {recipe.instructions.map((instruction, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 print:text-black print:text-xs flex items-start"
                  >
                    <span className="bg-gray-800 text-white print:bg-black print:text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-bold print:w-5 print:h-5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* Recipe Footer */}
          <div className="recipe-footer mt-6 pt-3 border-t border-gray-400 print:border-black text-center">
            <p className="text-xs text-gray-600 print:text-black">
              {recipe.name} • {recipe.type}
              {recipe.cookTime ? ` • ${recipe.cookTime}` : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeBook;
