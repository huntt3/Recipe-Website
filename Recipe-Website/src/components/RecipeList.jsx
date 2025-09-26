import { useState, useEffect } from "react";

const RecipeList = ({ onRecipeSelect, searchTerm, filterType, sortBy }) => {
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

  // Filter recipes based on search term and type
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      searchTerm === "" ||
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesType = filterType === "All" || recipe.type === filterType;

    return matchesSearch && matchesType;
  });

  // Sort filtered recipes
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "type":
        return a.type.localeCompare(b.type);
      case "cookTime":
        return a.cookTime.localeCompare(b.cookTime);
      default:
        return 0;
    }
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sortedRecipes.map((recipe, index) => (
        <div
          key={index}
          className="recipe-card bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer print:shadow-none print:border-2 print:border-black"
          onClick={() => onRecipeSelect(recipe)}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800 print:text-black">
            {recipe.name}
          </h3>

          <div className="mb-2">
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 text-sm rounded print:bg-transparent print:border print:border-black print:text-black">
              {recipe.type}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-2 print:text-black">
            <strong>Cook Time:</strong> {recipe.cookTime}
          </p>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-700 mb-1 print:text-black">
              Ingredients:
            </h4>
            <ul className="text-xs text-gray-600 print:text-black">
              {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                <li key={idx}>• {ingredient}</li>
              ))}
              {recipe.ingredients.length > 3 && (
                <li className="text-gray-500 print:text-black">
                  ...and {recipe.ingredients.length - 3} more
                </li>
              )}
            </ul>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm no-print">
            View Recipe
          </button>
        </div>
      ))}

      {sortedRecipes.length === 0 && (
        <div className="col-span-full text-center py-8 text-gray-500">
          No recipes found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default RecipeList;
