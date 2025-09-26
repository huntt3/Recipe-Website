import { useState } from "react";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import SearchAndFilter from "./components/SearchAndFilter";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import PrintTestButton from "./components/PrintTestButton";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-4 pb-8">
        {selectedRecipe ? (
          <RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
        ) : (
          <>
            <Instructions />

            <SearchAndFilter
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
            />

            <RecipeList
              onRecipeSelect={handleRecipeSelect}
              searchTerm={searchTerm}
              filterType={filterType}
              sortBy={sortBy}
            />
          </>
        )}
      </main>

      {/* Print-only footer */}
      <footer className="hidden print:block print:fixed print:bottom-0 print:w-full print:text-center print:text-xs print:border-t print:border-black print:pt-2">
        <p>Recipe Collection - Printed on {new Date().toLocaleDateString()}</p>
      </footer>

      {/* Print test button */}
      <PrintTestButton />
    </div>
  );
}

export default App;
